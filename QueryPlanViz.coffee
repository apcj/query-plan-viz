###!
Copyright (c) 2002-2014 "Neo Technology,"
Network Engine for Objects in Lund AB [http://neotechnology.com]

This file is part of Neo4j.

Neo4j is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
###

'use strict'

window.neo = {} unless window.neo

window.neo.QueryPlanViz =
    ($element) ->
      operatorWidth = 100
      operatorHeight = 18
      operatorPadding = 50
      rankHeight = 50
      margin = 10

      colors = [
        { color: '#A5ABB6', 'border-color': '#9AA1AC', 'text-color-internal': '#FFFFFF' }
        { color: '#68BDF6', 'border-color': '#5CA8DB', 'text-color-internal': '#FFFFFF' }
        { color: '#6DCE9E', 'border-color': '#60B58B', 'text-color-internal': '#FFFFFF' }
        { color: '#FF756E', 'border-color': '#E06760', 'text-color-internal': '#FFFFFF' }
        { color: '#DE9BF9', 'border-color': '#BF85D6', 'text-color-internal': '#FFFFFF' }
        { color: '#FB95AF', 'border-color': '#E0849B', 'text-color-internal': '#FFFFFF' }
        { color: '#FFD86E', 'border-color': '#EDBA39', 'text-color-internal': '#604A0E' }
      ]

      rows = (operator) ->
        operator.Rows || operator.EstimatedRows

      nonZeroRows = (operator) ->
        Math.max(1, rows(operator))

      @render = (queryPlan) ->
        operators = []

        collectOperators = (operator) ->
          operators.push operator
          for child in operator.children
            collectOperators child

        collectOperators queryPlan.root

        rowScale = d3.scale.log()
          .domain([1, d3.max(operators, (operator) -> nonZeroRows(operator) + 1)])
          .range([1, (rankHeight - operatorHeight) / d3.max(operators, (operator) -> operator.children.length)])

        linkWidth = (operator) ->
          rowScale(nonZeroRows(operator))

        links = []

        collectLinks = (operator, rank) ->
          operator.rank = rank
          operator.throughput = operatorWidth
          childrenWidth = d3.sum(operator.children, linkWidth)
          tx = (operator.throughput - childrenWidth) / 2
          for child in operator.children
            child.parent = operator
            collectLinks child, rank + 1
            links.push
              source: child
              target: operator
              value: linkWidth(child)
              rows: rows(child)
              tx: tx
            tx += linkWidth(child)

        collectLinks queryPlan.root, 0

        ranks = d3.nest()
        .key((operator) -> operator.rank)
        .entries(operators)

        width = d3.max(ranks.map((rank) -> d3.sum(rank.values.map((operator) -> operator.throughput + operatorPadding))))
        height = ranks.length * rankHeight

        for rank in ranks
          for operator in rank.values
            operator.x = 0
            operator.y = height - (operator.rank + 1) * rankHeight

        collide = ->
          for rank in ranks
            x0 = 0
            for operator in rank.values
              dx = x0 - operator.x
              if dx > 0
                operator.x += dx
              x0 = operator.x + operator.throughput + operatorPadding

            dx = x0 - operatorPadding - width
            if dx > 0
              lastOperator = rank.values[rank.values.length - 1]
              x0 = lastOperator.x -= dx
              for i in [rank.values.length - 2..0] by -1
                operator = rank.values[i]
                dx = operator.x + operator.throughput + operatorPadding - x0
                if dx > 0
                  operator.x -= operator.throughput
                  x0 = operator.x

        center = (operator) ->
          operator.x + operator.throughput / 2

        relaxUpwards = (alpha) ->
          for rank in ranks
            for operator in rank.values
              if operator.children.length
                x = d3.sum(operator.children, (child) -> linkWidth(child) * center(child)) / d3.sum(operator.children, linkWidth)
                operator.x += (x - center(operator)) * alpha

        relaxDownwards = (alpha) ->
          for rank in ranks.slice().reverse()
            for operator in rank.values
              if operator.parent
                operator.x += (center(operator.parent) - center(operator)) * alpha

        collide()
        iterations = 300
        alpha = 1
        while iterations--
          relaxUpwards(alpha)
          collide()
          relaxDownwards(alpha)
          collide()
          alpha *= .99

        width = d3.max(operators, (o) -> o.x) - d3.min(operators, (o) -> o.x) + operatorWidth

        svg = d3.select($element)
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [d3.min(operators, (o) -> o.x) - margin, -margin, width + margin * 2, height + margin * 2].join(' '))

        formatNumber = d3.format(",.0f")
        format = (d) ->
          formatNumber(d) + (if d is 1 then ' row' else ' rows')
        color = d3.scale.ordinal()
        .range(colors);

        path = (d) ->
          width = Math.max(1, d.value)
          sourceX = d.source.x + (d.source.throughput / 2)
          targetX = d.target.x + d.tx
          controlWidth = width / Math.PI
          if sourceX > targetX
            controlWidth *= -1

          sourceY = d.source.y + operatorHeight
          targetY = d.target.y
          yi = d3.interpolateNumber(sourceY, targetY)
          curvature = .5
          control1 = yi(curvature)
          control2 = yi(1 - curvature)

          [
            'M', (sourceX + width / 2), sourceY,
            'C', (sourceX + width / 2), control1 - controlWidth,
            (targetX + width), control2 - controlWidth,
            (targetX + width), targetY,
            'L', targetX, targetY,
            'C', targetX, control2 + controlWidth,
            (sourceX - width / 2), control1 + controlWidth,
            (sourceX - width / 2), sourceY,
            'Z'
          ].join(' ')

        linkElement = svg.append('g').selectAll('.link')
        .data(links)
        .enter().append('g')
        .attr('class', 'link')

        linkElement
        .append('path')
        .attr('d', path)

        linkElement
        .append('text')
        .attr('x', (d) ->
          d.source.x + d.source.throughput / 2)
        .attr('y', (d) ->
          d.source.y + 40)
        .attr('text-anchor', 'middle')
        .text((d) ->
          format(d.rows))

        operatorElement = svg.append('g').selectAll('.operator')
        .data(operators)
        .enter().append('g')
        .attr('class', 'operator')
        .attr('transform', (d) -> "translate(#{d.x},#{d.y})")

        operatorElement.append('rect')
        .attr('width', (d) -> Math.max(1, d.throughput))
        .attr('height', operatorHeight)
        .attr('rx', 4)
        .attr('ry', 4)
        .style('fill', (d) -> color(d.operatorType).color)
        .append('title')
        .text((d) -> d.name + '\n' + format(d.value))

        textElement = operatorElement.append('text')
        .attr('y', 13)
        .attr('x', 2)
        .attr('fill', (d) -> color(d.operatorType)['text-color-internal'])

        textElement.append('tspan')
        .attr('class', 'operator-name')
        .text((d) -> d.operatorType)

        textElement.append('tspan')
        .attr('class', 'operator-identifiers')
        .attr('dx', 5)
        .text((d) -> d.IntroducedIdentifier)

      return @