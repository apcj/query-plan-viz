---
---
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
      operatorWidth = 180
      operatorHeaderHeight = 18
      operatorDetailHeight = 14
      operatorMargin = 50
      operatorPadding = 3
      rankMargin = 50
      margin = 10
      fixedWidthFont = "Monaco,'Courier New',Terminal,monospace"

      colors = [
        { color: '#A5ABB6', 'border-color': '#9AA1AC', 'text-color-internal': '#FFFFFF' }
        { color: '#68BDF6', 'border-color': '#5CA8DB', 'text-color-internal': '#FFFFFF' }
        { color: '#6DCE9E', 'border-color': '#60B58B', 'text-color-internal': '#FFFFFF' }
        { color: '#FF756E', 'border-color': '#E06760', 'text-color-internal': '#FFFFFF' }
        { color: '#DE9BF9', 'border-color': '#BF85D6', 'text-color-internal': '#FFFFFF' }
        { color: '#FB95AF', 'border-color': '#E0849B', 'text-color-internal': '#FFFFFF' }
        { color: '#FFD86E', 'border-color': '#EDBA39', 'text-color-internal': '#604A0E' }
      ]

      color = d3.scale.ordinal()
      .range(colors);

      # TODO: remove this function once all query plans have numeric counts.
      parseNumbers = (operator) ->
        for key in ['Rows', 'EstimatedRows', 'DbHits']
          if operator[key]
            operator[key] = parseInt(operator[key])
        operator

      rows = (operator) ->
        operator.Rows || operator.EstimatedRows || 0

      nonZeroRows = (operator) ->
        Math.max(1, rows(operator))

      plural = (noun, count) ->
        if count is 1 then noun else noun + 's'

      formatNumber = d3.format(",.0f")
      format = (d) ->
        formatNumber(d) + ' ' + plural('row', d)


      operatorDetails = (operator) ->
        return [] unless operator.expanded

        measure = (text) ->
          neo.utils.measureText(text, fixedWidthFont, 10)

        details = []
        if (expression = operator.LegacyExpression || operator.ExpandExpression)
          words = expression.split(/([^a-zA-Z\d])/)

          firstWord = 0
          lastWord = 1
          while firstWord < words.length
            while lastWord < words.length and measure(words.slice(firstWord, lastWord + 1).join('')) < operatorWidth - operatorPadding * 2
              lastWord++
            details.push { className: 'expression', value: words.slice(firstWord, lastWord).join('') }
            firstWord = lastWord
            lastWord = firstWord + 1

          details.push { value: '' } # padding

        details.push { className: 'rows', key: plural('row', operator.Rows || 0), value: formatNumber(operator.Rows || 0)}
        if operator.EstimatedRows
          details.push { className: 'estimated-rows', key: 'estimated rows', value: formatNumber(operator.EstimatedRows)}
        details.push { className: 'db-hits', key: plural('db hit', operator.DbHits || 0), value: formatNumber(operator.DbHits || 0)}
        if operator.identifiers
          details.push { className: 'identifiers', key: 'Identifiers', value: operator.identifiers}

        details

      operatorHeight = (d) ->
        if d.expanded
          operatorPadding * 2 + operatorHeaderHeight + operatorDetailHeight * operatorDetails(d).length
        else
          operatorHeaderHeight

      transform = (queryPlan) ->
        operators = []

        collectOperators = (operator) ->
          operators.push parseNumbers(operator)
          for child in operator.children
            collectOperators child

        collectOperators queryPlan.root

        rowScale = d3.scale.log()
        .domain([1, d3.max(operators, (operator) -> nonZeroRows(operator) + 1)])
        .range([1, (rankMargin) / d3.max(operators, (operator) -> operator.children.length)])

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

        [operators, links, linkWidth]

      layout = (operators, linkWidth) ->
        ranks = d3.nest()
        .key((operator) -> operator.rank)
        .entries(operators)

        currentY = 0

        for rank in ranks
          currentY -= (d3.max(rank.values, operatorHeight) + rankMargin)
          for operator in rank.values
            operator.x = 0
            operator.y = currentY

        width = d3.max(ranks.map((rank) -> d3.sum(rank.values.map((operator) -> operator.throughput + operatorMargin))))
        height = -currentY

        collide = ->
          for rank in ranks
            x0 = 0
            for operator in rank.values
              dx = x0 - operator.x
              if dx > 0
                operator.x += dx
              x0 = operator.x + operator.throughput + operatorMargin

            dx = x0 - operatorMargin - width
            if dx > 0
              lastOperator = rank.values[rank.values.length - 1]
              x0 = lastOperator.x -= dx
              for i in [rank.values.length - 2..0] by -1
                operator = rank.values[i]
                dx = operator.x + operator.throughput + operatorMargin - x0
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

        [width, height]

      render = (operators, links, width, height, redisplay) ->
        svg = d3.select($element)

        svg.transition()
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [d3.min(operators, (o) -> o.x) - margin, -margin - height, width + margin * 2, height + margin * 2].join(' '))

        join = (parent, children) ->
          for child in d3.entries(children)
            selection = parent.selectAll(child.key).data(child.value.data)
            child.value.selections(selection.enter(), selection, selection.exit())
            if child.value.children
              join(selection, child.value.children)

        join(svg, {
          '.link':
            data: links,
            selections: (enter) ->
              enter.append('g')
              .attr('class', 'link')
             children:

              'path':
                data: (d) -> [d]
                selections: (enter, update) ->
                  enter
                  .append('path')

                  update
                  .transition()
                  .attr('d', (d) ->
                    width = Math.max(1, d.value)
                    sourceX = d.source.x + (d.source.throughput / 2)
                    targetX = d.target.x + d.tx
                    controlWidth = width / Math.PI
                    if sourceX > targetX
                      controlWidth *= -1

                    sourceY = d.source.y + operatorHeight(d.source)
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
                    ].join(' '))

              'text':
                data: (d) -> [d]
                selections: (enter, update) ->
                  enter
                  .append('text')

                  update
                  .transition()
                  .attr('x', (d) ->
                    d.source.x + d.source.throughput / 2)
                  .attr('y', (d) ->
                    d.target.y - 20)
                  .attr('text-anchor', 'middle')
                  .text((d) ->
                    format(d.rows))

          '.operator':
            data: operators
            selections: (enter, update) ->
              enter
              .append('g')
              .attr('class', 'operator')

              update
              .transition()
              .attr('transform', (d) -> "translate(#{d.x},#{d.y})")
            children:

              'g.header':
                data: (d) -> [d]
                selections: (enter) ->
                  enter
                  .append('g')
                  .attr('class', 'header')
                  .attr('pointer-events', 'all')
                  .on('click', (d) ->
                    d.expanded = !d.expanded
                    redisplay()
                  )
                children:

                  'rect':
                    data: (d) -> [d]
                    selections: (enter, update) ->
                      enter
                      .append('rect')

                      update
                      .attr('width', (d) -> Math.max(1, d.throughput))
                      .attr('height', operatorHeaderHeight)
                      .attr('rx', 4)
                      .attr('ry', 4)
                      .style('fill', (d) -> color(d.operatorType).color)

                  'path.expand':
                    data: (d) -> [d]
                    selections: (enter, update) ->
                      rotateForExpand = (d) ->
                        "translate(#{operatorHeaderHeight / 2}, #{operatorHeaderHeight / 2}) " +
                        "rotate(#{if d.expanded then 90 else 0}) " +
                        "scale(0.5)"

                      enter
                      .append('path')
                      .attr('class', 'expand')
                      .attr('fill', (d) -> color(d.operatorType)['text-color-internal'])
                      .attr('d', 'M -5 -10 L 8.66 0 L -5 10 Z')
                      .attr('transform', rotateForExpand)

                      update
                      .transition()
                      .attr('transform', rotateForExpand)

                  'text.title':
                    data: (d) -> [d]
                    selections: (enter) ->
                      enter
                      .append('text')
                      .attr('class', 'title')
                      .attr('x', operatorHeaderHeight)
                      .attr('y', 13)
                      .attr('fill', (d) -> color(d.operatorType)['text-color-internal'])
                      .text((d) -> d.operatorType)

              'rect.outline':
                data: (d) -> [d]
                selections: (enter, update) ->
                  enter
                  .append('rect')
                  .attr('class', 'outline')

                  update
                  .transition()
                  .attr('width', (d) -> Math.max(1, d.throughput))
                  .attr('height', operatorHeight)
                  .attr('rx', 4)
                  .attr('ry', 4)
                  .attr('fill', 'none')
                  .attr('stroke-width', 1)
                  .style('stroke', (d) -> color(d.operatorType)['border-color'])

              'g.detail':
                data: operatorDetails
                selections: (enter, update, exit) ->
                  enter
                  .append('g')

                  update
                  .attr('class', (d) -> 'detail ' + d.className)
                  .attr('transform', (d, i) -> "translate(0, #{operatorHeaderHeight + (1 + i) * operatorDetailHeight})")
                  .attr('font-family', (d) -> if d.className is 'expression' then fixedWidthFont else null)

                  exit.remove()
                children:

                  'text':
                    data: (d) ->
                      if d.key
                        [
                          { text: d.value + ' ', align: 'end', x: operatorWidth / 2 }
                          { text: d.key, align: 'start', x: operatorWidth / 2 }
                        ]
                      else
                        [
                          { text: d.value, align: 'start', x: operatorPadding }
                        ]
                    selections: (enter, update, exit) ->
                      enter
                      .append('text')

                      update
                      .attr('x', (d) -> d.x)
                      .attr('text-anchor', (d) -> d.align)
                      .attr('xml:space', 'preserve')
                      .attr('fill', 'black')
                      .transition()
                      .each('end', ->
                        update
                        .text((d) -> d.text)
                      )

                      exit.remove()
        })

      display = (queryPlan) ->

        [operators, links, linkWidth] = transform(queryPlan)
        [width, height] = layout(operators, linkWidth)
        render(operators, links, width, height, -> display(queryPlan))

      @display = display

      @