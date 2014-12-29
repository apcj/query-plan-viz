example_plans =
{"Neo4jQuery1EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns id, lastName, distance, birthday, creationDate, gender, browser, locationIp, emails, languages, cityName, unis, companies", "Rows": "0", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "distance, Cached(lastName of type Any), Cached(id of type Any)", "Rows": "0", "DbHits": "0", "children": [
        {"operatorType": "Extract", "KeyNames": "birthday, cityName, browser, locationIp, lastName, id, languages, creationDate, emails, gender", "Rows": "0", "DbHits": "0", "children": [
            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, companies, unis, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                {"operatorType": "EagerAggregation", "KeyNames": "friend, unis, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                    {"operatorType": "OptionalMatch", "Rows": "0", "DbHits": "0", "children": [
                        {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, unis, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                            {"operatorType": "EagerAggregation", "KeyNames": "friend, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                                {"operatorType": "OptionalMatch", "Rows": "0", "DbHits": "0", "children": [
                                    {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendCity:City(3))", "Rows": "0", "DbHits": "0", "children": [
                                            {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns distance, friend", "Rows": "0", "DbHits": "0", "children": [
                                                    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "distance, Cached(  FRESHID161 of type Any), Cached(  FRESHID182 of type Any)", "Rows": "0", "DbHits": "0", "children": [
                                                        {"operatorType": "Extract", "KeyNames": "  FRESHID161,   FRESHID182", "Rows": "0", "DbHits": "0", "children": [
                                                            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, distance", "Rows": "0", "DbHits": "0", "children": [
                                                                {"operatorType": "EagerAggregation", "KeyNames": "friend", "Rows": "0", "DbHits": "0", "children": [
                                                                    {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND Property(friend,firstName(12)) == {2})", "Rows": "0", "DbHits": "554796", "children": [
                                                                        {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED24, friend, path", "Rows": "184932", "DbHits": "194518", "children": []}
                                                                    ]}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]},
                                    {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "(hasLabel(uni:University(10)) AND hasLabel(uniCity:City(3)))", "Rows": "0", "DbHits": "0", "children": [
                                            {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                                {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                    {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendCity:City(3))", "Rows": "0", "DbHits": "0", "children": [
                                                            {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                                {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns distance, friend", "Rows": "0", "DbHits": "0", "children": [
                                                                    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "distance, Cached(  FRESHID161 of type Any), Cached(  FRESHID182 of type Any)", "Rows": "0", "DbHits": "0", "children": [
                                                                        {"operatorType": "Extract", "KeyNames": "  FRESHID161,   FRESHID182", "Rows": "0", "DbHits": "0", "children": [
                                                                            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, distance", "Rows": "0", "DbHits": "0", "children": [
                                                                                {"operatorType": "EagerAggregation", "KeyNames": "friend", "Rows": "0", "DbHits": "0", "children": [
                                                                                    {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND Property(friend,firstName(12)) == {2})", "Rows": "0", "DbHits": "554796", "children": [
                                                                                        {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED24, friend, path", "Rows": "184932", "DbHits": "194518", "children": []}
                                                                                    ]}
                                                                                ]}
                                                                            ]}
                                                                        ]}
                                                                    ]}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]},
                        {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(company:Company(9)) AND hasLabel(companyCountry:Country(2)))", "Rows": "0", "DbHits": "0", "children": [
                                {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                    {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                        {"operatorType": "Eager", "Rows": "0", "DbHits": "0", "children": [
                                            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, unis, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                                                {"operatorType": "EagerAggregation", "KeyNames": "friend, friendCity, distance", "Rows": "0", "DbHits": "0", "children": [
                                                    {"operatorType": "OptionalMatch", "Rows": "0", "DbHits": "0", "children": [
                                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendCity:City(3))", "Rows": "0", "DbHits": "0", "children": [
                                                            {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                                {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns distance, friend", "Rows": "0", "DbHits": "0", "children": [
                                                                    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "distance, Cached(  FRESHID161 of type Any), Cached(  FRESHID182 of type Any)", "Rows": "0", "DbHits": "0", "children": [
                                                                        {"operatorType": "Extract", "KeyNames": "  FRESHID161,   FRESHID182", "Rows": "0", "DbHits": "0", "children": [
                                                                            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, distance", "Rows": "0", "DbHits": "0", "children": [
                                                                                {"operatorType": "EagerAggregation", "KeyNames": "friend", "Rows": "0", "DbHits": "0", "children": [
                                                                                    {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND Property(friend,firstName(12)) == {2})", "Rows": "0", "DbHits": "554796", "children": [
                                                                                        {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED24, friend, path", "Rows": "184932", "DbHits": "194518", "children": []}
                                                                                    ]}
                                                                                ]}
                                                                            ]}
                                                                        ]}
                                                                    ]}
                                                                ]}
                                                            ]}
                                                        ]},
                                                        {"operatorType": "Filter", "LegacyExpression": "(hasLabel(uni:University(10)) AND hasLabel(uniCity:City(3)))", "Rows": "0", "DbHits": "0", "children": [
                                                            {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendCity:City(3))", "Rows": "0", "DbHits": "0", "children": [
                                                                    {"operatorType": "SimplePatternMatcher", "Rows": "0", "DbHits": "0", "children": [
                                                                        {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns distance, friend", "Rows": "0", "DbHits": "0", "children": [
                                                                            {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "distance, Cached(  FRESHID161 of type Any), Cached(  FRESHID182 of type Any)", "Rows": "0", "DbHits": "0", "children": [
                                                                                {"operatorType": "Extract", "KeyNames": "  FRESHID161,   FRESHID182", "Rows": "0", "DbHits": "0", "children": [
                                                                                    {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, distance", "Rows": "0", "DbHits": "0", "children": [
                                                                                        {"operatorType": "EagerAggregation", "KeyNames": "friend", "Rows": "0", "DbHits": "0", "children": [
                                                                                            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND Property(friend,firstName(12)) == {2})", "Rows": "0", "DbHits": "554796", "children": [
                                                                                                {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED24, friend, path", "Rows": "184932", "DbHits": "194518", "children": []}
                                                                                            ]}
                                                                                        ]}
                                                                                    ]}
                                                                                ]}
                                                                            ]}
                                                                        ]}
                                                                    ]}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery2EmbeddedCypher": {"plan": {"root": {"operatorType": "Projection", "DbHits": "180", "Rows": "20", "version": "CYPHER 2.2-cost", "KeyNames": "personId, messageDate, messageContent, messageId, personFirstName, personLastName", "EstimatedRows": "2473", "children": [
    {"operatorType": "Top", "DbHits": "0", "Rows": "20", "LegacyExpression": "{3}", "EstimatedRows": "2473", "KeyExpressions": "messageDate, messageId", "children": [
        {"operatorType": "Projection", "KeyNames": "friend, messageId, message, messageDate", "Rows": "8749", "DbHits": "34996", "EstimatedRows": "2473", "children": [
            {"operatorType": "Filter", "LegacyExpression": "(Property(message,creationDate(2)) <= {2} AND Ors(List(hasLabel(message:Post(5)), hasLabel(message:Comment(0)))))", "Rows": "8749", "DbHits": "57598", "EstimatedRows": "2473", "children": [
                {"operatorType": "Expand", "ExpandExpression": "(friend)<-[:  UNNAMED50]-(message)", "Rows": "14954", "DbHits": "14964", "EstimatedRows": "10914", "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person(1))", "Rows": "10", "DbHits": "10", "EstimatedRows": "36", "children": [
                        {"operatorType": "Expand", "ExpandExpression": "(  UNNAMED7)-[:  UNNAMED25]-(friend)", "Rows": "10", "DbHits": "11", "EstimatedRows": "36", "children": [
                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery3EmbeddedCypher": {"plan": {"root": {"operatorType": "Top", "DbHits": "0", "Rows": "10", "version": "CYPHER 2.2-rule", "LegacyExpression": "{6}", "KeyExpressions": "Cached(xyCount of type Integer), friendId", "children": [
    {"operatorType": "Extract", "KeyNames": "xyCount", "Rows": "10", "DbHits": "0", "children": [
        {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friendId, friendFirstName, friendLastName, xCount, yCount", "Rows": "10", "DbHits": "0", "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "friendId, friendFirstName, friendLastName, xCount", "Rows": "10", "DbHits": "0", "children": [
                {"operatorType": "Extract", "KeyNames": "friendId, friendFirstName, friendLastName", "Rows": "12", "DbHits": "72", "children": [
                    {"operatorType": "Filter", "LegacyExpression": "(Property(messageY,creationDate(2)) >= {4} AND Property(messageY,creationDate(2)) < {5})", "Rows": "12", "DbHits": "48", "children": [
                        {"operatorType": "SimplePatternMatcher", "Rows": "12", "DbHits": "828", "children": [
                            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, countryY, xCount", "Rows": "33", "DbHits": "0", "children": [
                                {"operatorType": "EagerAggregation", "KeyNames": "friend, countryY", "Rows": "33", "DbHits": "0", "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "(Property(messageX,creationDate(2)) >= {4} AND Property(messageX,creationDate(2)) < {5})", "Rows": "48", "DbHits": "192", "children": [
                                        {"operatorType": "SimplePatternMatcher", "Rows": "48", "DbHits": "4612", "children": [
                                            {"operatorType": "Filter", "LegacyExpression": "((((hasLabel(friend:Person(1)) AND hasLabel(country:Country(2))) AND NOT(person == friend)) AND NOT(country == countryX)) AND NOT(country == countryY))", "Rows": "424", "DbHits": "848", "children": [
                                                {"operatorType": "PatternMatcher", "Rows": "424", "DbHits": "4500", "children": [
                                                    {"operatorType": "SchemaIndex", "LegacyExpression": "{1}", "Index": ":Person(id)", "Rows": "1", "DbHits": "2", "children": [
                                                        {"operatorType": "SchemaIndex", "LegacyExpression": "{3}", "Index": ":Country(name)", "Rows": "1", "DbHits": "2", "children": [
                                                            {"operatorType": "SchemaIndex", "LegacyExpression": "{2}", "Index": ":Country(name)", "Rows": "1", "DbHits": "2", "children": []}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery4EmbeddedCypher": {"plan": {"root": {"operatorType": "Top", "DbHits": "0", "Rows": "0", "version": "CYPHER 2.2-cost", "LegacyExpression": "{4}", "EstimatedRows": "2", "KeyExpressions": "postCount, tagName", "children": [
    {"operatorType": "Projection", "KeyNames": "tagName, postCount", "Rows": "0", "DbHits": "0", "EstimatedRows": "2", "children": [
        {"operatorType": "EagerAggregation", "KeyNames": "  AGGREGATION329", "Rows": "0", "DbHits": "0", "EstimatedRows": "2", "children": [
            {"operatorType": "Projection", "KeyNames": "  AGGREGATION329, post", "Rows": "0", "DbHits": "0", "EstimatedRows": "5", "children": [
                {"operatorType": "Filter", "LegacyExpression": "LengthFunction(  AGGREGATION263) == Literal(0)", "Rows": "0", "DbHits": "0", "EstimatedRows": "5", "children": [
                    {"operatorType": "EagerAggregation", "KeyNames": "tag, post", "Rows": "19", "DbHits": "0", "EstimatedRows": "56", "children": [
                        {"operatorType": "OptionalExpand", "ExpandExpression": "(tag)<-[:  UNNAMED180]-(oldPost)", "Rows": "14102", "DbHits": "59603", "EstimatedRows": "3144", "children": [
                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(tag:Tag(7))", "Rows": "19", "DbHits": "19", "EstimatedRows": "234", "children": [
                                {"operatorType": "Expand", "ExpandExpression": "(post)-[:  UNNAMED78]->(tag)", "Rows": "19", "DbHits": "32", "EstimatedRows": "234", "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "((hasLabel(post:Post(5)) AND Property(post,creationDate(2)) >= {2}) AND Property(post,creationDate(2)) < {3})", "Rows": "13", "DbHits": "6235", "EstimatedRows": "326", "children": [
                                        {"operatorType": "Expand", "ExpandExpression": "(  UNNAMED41)<-[:  UNNAMED50]-(post)", "Rows": "1247", "DbHits": "1249", "EstimatedRows": "10914", "children": [
                                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(  UNNAMED41:Person(1))", "Rows": "2", "DbHits": "2", "EstimatedRows": "36", "children": [
                                                {"operatorType": "Expand", "ExpandExpression": "(person)-[:  UNNAMED31]-(  UNNAMED41)", "Rows": "2", "DbHits": "3", "EstimatedRows": "36", "children": [
                                                    {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery5EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns forumName, postCount", "Rows": "20", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns forumName, postCount,   FRESHID369", "Rows": "20", "DbHits": "0", "children": [
        {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "postCount, Cached(  FRESHID369 of type Any)", "Rows": "20", "DbHits": "0", "children": [
            {"operatorType": "Extract", "KeyNames": "  FRESHID369", "Rows": "16701", "DbHits": "33402", "children": [
                {"operatorType": "Extract", "KeyNames": "forumName", "Rows": "16701", "DbHits": "33402", "children": [
                    {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns forum, postCount", "Rows": "16701", "DbHits": "0", "children": [
                        {"operatorType": "EagerAggregation", "KeyNames": "forum", "Rows": "16701", "DbHits": "0", "children": [
                            {"operatorType": "OptionalMatch", "Rows": "23972", "DbHits": "0", "children": [
                                {"operatorType": "Eager", "Rows": "23969", "DbHits": "0", "children": [
                                    {"operatorType": "Distinct", "KeyNames": "friend, forum", "Rows": "23969", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "(hasLabel(forum:Forum(6)) AND Property(membership,joinDate(18)) > {2})", "Rows": "23969", "DbHits": "71907", "children": [
                                            {"operatorType": "SimplePatternMatcher", "Rows": "23969", "DbHits": "340722", "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND NOT(person == friend))", "Rows": "450", "DbHits": "450", "children": [
                                                    {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED30, friend,   UNNAMED31", "Rows": "450", "DbHits": "457", "children": []}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]},
                                {"operatorType": "Eager", "Rows": "25", "DbHits": "0", "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(post:Post(5))", "Rows": "25", "DbHits": "25", "children": [
                                        {"operatorType": "Eager", "Rows": "25", "DbHits": "0", "children": [
                                            {"operatorType": "SimplePatternMatcher", "Rows": "25", "DbHits": "25", "children": [
                                                {"operatorType": "Eager", "Rows": "23969", "DbHits": "0", "children": [
                                                    {"operatorType": "Distinct", "KeyNames": "friend, forum", "Rows": "23969", "DbHits": "0", "children": [
                                                        {"operatorType": "Filter", "LegacyExpression": "(hasLabel(forum:Forum(6)) AND Property(membership,joinDate(18)) > {2})", "Rows": "23969", "DbHits": "71907", "children": [
                                                            {"operatorType": "SimplePatternMatcher", "Rows": "23969", "DbHits": "340722", "children": [
                                                                {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND NOT(person == friend))", "Rows": "450", "DbHits": "450", "children": [
                                                                    {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED30, friend,   UNNAMED31", "Rows": "450", "DbHits": "457", "children": []}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery6EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns tagName, postCount", "Rows": "1", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "Cached(  INTERNAL_AGGREGATE98d6375b-3003-4d28-bb85-aedce250272c of type Integer), Cached(tagName of type Any)", "Rows": "1", "DbHits": "0", "children": [
        {"operatorType": "EagerAggregation", "KeyNames": "tagName", "Rows": "1", "DbHits": "0", "children": [
            {"operatorType": "Extract", "KeyNames": "tagName", "Rows": "1", "DbHits": "2", "children": [
                {"operatorType": "Filter", "LegacyExpression": "((hasLabel(commonPost:Post(5)) AND nonEmpty(PathExpression((commonPost)-[  UNNAMED366:HAS_CREATOR]->(friend), true))) AND NOT(  UNNAMED295 ==   UNNAMED325))", "Rows": "1", "DbHits": "1", "children": [
                    {"operatorType": "SimplePatternMatcher", "Rows": "1", "DbHits": "1", "children": [
                        {"operatorType": "Distinct", "KeyNames": "commonTag, knownTag, friend", "Rows": "1", "DbHits": "0", "children": [
                            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(commonTag:Tag(7)) AND NOT(commonTag == knownTag))", "Rows": "1", "DbHits": "1", "children": [
                                {"operatorType": "SimplePatternMatcher", "Rows": "1", "DbHits": "5", "children": [
                                    {"operatorType": "PatternMatcher", "Rows": "4", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "NOT(person == friend)", "Rows": "13", "DbHits": "0", "children": [
                                            {"operatorType": "SchemaIndex", "LegacyExpression": "{1}", "Index": ":Person(id)", "Rows": "13", "DbHits": "26", "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person(1))", "Rows": "13", "DbHits": "13", "children": [
                                                    {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED61, friend,   UNNAMED95, friend", "Rows": "13", "DbHits": "68", "children": []}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery7EmbeddedCypher": {"plan": {"root": {"operatorType": "Projection", "DbHits": "220", "Rows": "20", "version": "CYPHER 2.2-cost", "KeyNames": "personId, latencyAsMilli, messageContent, messageId, isNew, likeTime, personFirstName, personLastName", "EstimatedRows": "13", "children": [
    {"operatorType": "Top", "DbHits": "0", "Rows": "20", "LegacyExpression": "{2}", "EstimatedRows": "13", "KeyExpressions": "  likeTime@390, personId", "children": [
        {"operatorType": "Projection", "KeyNames": "personId,   likeTime@390, person, liker,   AGGREGATION201", "Rows": "1236", "DbHits": "2472", "EstimatedRows": "13", "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "liker, person", "Rows": "1236", "DbHits": "0", "EstimatedRows": "13", "children": [
                {"operatorType": "Sort", "KeyNames": "  likeTime@128,   FRESHID177", "Rows": "6134", "DbHits": "0", "EstimatedRows": "190", "children": [
                    {"operatorType": "Projection", "KeyNames": "  likeTime@128, person, message, liker,   FRESHID177", "Rows": "6134", "DbHits": "12268", "EstimatedRows": "190", "children": [
                        {"operatorType": "Projection", "KeyNames": "liker, message,   likeTime@128, person", "Rows": "6134", "DbHits": "12268", "EstimatedRows": "190", "children": [
                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(liker:Person(1))", "Rows": "6134", "DbHits": "6134", "EstimatedRows": "190", "children": [
                                {"operatorType": "Expand", "ExpandExpression": "(message)<-[:like]-(liker)", "Rows": "6134", "DbHits": "10021", "EstimatedRows": "190", "children": [
                                    {"operatorType": "Expand", "ExpandExpression": "(person)<-[:  UNNAMED31]-(message)", "Rows": "3887", "DbHits": "3888", "EstimatedRows": "303", "children": [
                                        {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery8EmbeddedCypher": {"plan": {"root": {"operatorType": "Projection", "DbHits": "160", "Rows": "20", "version": "CYPHER 2.2-cost", "KeyNames": "commentContent, personId, commentCreationDate, commentId, personFirstName, personLastName", "EstimatedRows": "194", "children": [
    {"operatorType": "Top", "DbHits": "0", "Rows": "20", "LegacyExpression": "{2}", "EstimatedRows": "194", "KeyExpressions": "commentCreationDate, commentId", "children": [
        {"operatorType": "Projection", "KeyNames": "person, commentId, commentCreationDate, comment", "Rows": "4032", "DbHits": "16128", "EstimatedRows": "194", "children": [
            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(person:Person(1)) AND NOT(  UNNAMED30 ==   UNNAMED80))", "Rows": "4032", "DbHits": "4032", "EstimatedRows": "194", "children": [
                {"operatorType": "Expand", "ExpandExpression": "(comment)-[:  UNNAMED80]->(person)", "Rows": "4032", "DbHits": "8064", "EstimatedRows": "194", "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(comment:Comment(0))", "Rows": "4032", "DbHits": "4032", "EstimatedRows": "194", "children": [
                        {"operatorType": "Expand", "ExpandExpression": "(  UNNAMED47)<-[:  UNNAMED49]-(comment)", "Rows": "4032", "DbHits": "8812", "EstimatedRows": "194", "children": [
                            {"operatorType": "Expand", "ExpandExpression": "(start)<-[:  UNNAMED30]-(  UNNAMED47)", "Rows": "4780", "DbHits": "4781", "EstimatedRows": "303", "children": [
                                {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery9EmbeddedCypher": {"plan": {"root": {"operatorType": "Top", "DbHits": "0", "Rows": "20", "version": "CYPHER 2.2-rule", "LegacyExpression": "{3}", "KeyExpressions": "Cached(messageCreationDate of type Any), Cached(messageId of type Any)", "children": [
    {"operatorType": "Distinct", "KeyNames": "personId, messageCreationDate, messageContent, messageId, personFirstName, personLastName", "Rows": "686882", "DbHits": "0", "children": [
        {"operatorType": "Extract", "KeyNames": "personId, messageCreationDate, messageContent, messageId, personFirstName, personLastName", "Rows": "906498", "DbHits": "11784474", "children": [
            {"operatorType": "Filter", "LegacyExpression": "Property(message,creationDate(2)) < {2}", "Rows": "906498", "DbHits": "1812996", "children": [
                {"operatorType": "SimplePatternMatcher", "Rows": "906498", "DbHits": "2333890", "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person(1))", "Rows": "2349", "DbHits": "2349", "children": [
                        {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED24, friend,   UNNAMED25", "Rows": "2349", "DbHits": "2389", "children": []}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery10EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns personId, personFirstName, personLastName, personGender, personCityName, commonInterestScore", "Rows": "10", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "Top", "LegacyExpression": "{4}", "KeyExpressions": "Cached(commonInterestScore of type Number), Cached(personId of type Any)", "Rows": "10", "DbHits": "0", "children": [
        {"operatorType": "Extract", "KeyNames": "personId, commonInterestScore, personCityName, personGender, personFirstName, personLastName", "Rows": "219", "DbHits": "2190", "children": [
            {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, city, postCount, commonPostCount", "Rows": "219", "DbHits": "0", "children": [
                {"operatorType": "Extract", "KeyNames": "postCount, commonPostCount", "Rows": "219", "DbHits": "1280117", "children": [
                    {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friend, city, posts, person", "Rows": "219", "DbHits": "0", "children": [
                        {"operatorType": "EagerAggregation", "KeyNames": "friend, city, person", "Rows": "219", "DbHits": "0", "children": [
                            {"operatorType": "OptionalMatch", "Rows": "23626", "DbHits": "0", "children": [
                                {"operatorType": "Eager", "Rows": "219", "DbHits": "0", "children": [
                                    {"operatorType": "Distinct", "KeyNames": "friend, city, person", "Rows": "219", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(city:City(3))", "Rows": "274", "DbHits": "274", "children": [
                                            {"operatorType": "SimplePatternMatcher", "Rows": "274", "DbHits": "274", "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "(((hasLabel(friend:Person(1)) AND ((Property(friend,birthday_month(13)) == {2} AND Property(friend,birthday_day(6)) >= Literal(21)) OR (Property(friend,birthday_month(13)) == Add(Modulo({2},Literal(12)),Literal(1)) AND Property(friend,birthday_day(6)) < Literal(22)))) AND NOT(friend == person)) AND NOT(nonEmpty(PathExpression((friend)-[  UNNAMED267:KNOWS]-(person), true))))", "Rows": "274", "DbHits": "28710", "children": [
                                                    {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED30, friend,   UNNAMED31", "Rows": "3190", "DbHits": "3242", "children": []}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]},
                                {"operatorType": "Eager", "Rows": "23611", "DbHits": "0", "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(post:Post(5))", "Rows": "23611", "DbHits": "23611", "children": [
                                        {"operatorType": "Eager", "Rows": "23611", "DbHits": "0", "children": [
                                            {"operatorType": "SimplePatternMatcher", "Rows": "23611", "DbHits": "79799", "children": [
                                                {"operatorType": "Eager", "Rows": "219", "DbHits": "0", "children": [
                                                    {"operatorType": "Distinct", "KeyNames": "friend, city, person", "Rows": "219", "DbHits": "0", "children": [
                                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(city:City(3))", "Rows": "274", "DbHits": "274", "children": [
                                                            {"operatorType": "SimplePatternMatcher", "Rows": "274", "DbHits": "274", "children": [
                                                                {"operatorType": "Filter", "LegacyExpression": "(((hasLabel(friend:Person(1)) AND ((Property(friend,birthday_month(13)) == {2} AND Property(friend,birthday_day(6)) >= Literal(21)) OR (Property(friend,birthday_month(13)) == Add(Modulo({2},Literal(12)),Literal(1)) AND Property(friend,birthday_day(6)) < Literal(22)))) AND NOT(friend == person)) AND NOT(nonEmpty(PathExpression((friend)-[  UNNAMED267:KNOWS]-(person), true))))", "Rows": "274", "DbHits": "28710", "children": [
                                                                    {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED30, friend,   UNNAMED31", "Rows": "3190", "DbHits": "3242", "children": []}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery11EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friendId, friendFirstName, friendLastName, workFromYear, companyName", "Rows": "4", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "Top", "LegacyExpression": "{4}", "KeyExpressions": "Cached(workFromYear of type Any), Cached(friendId of type Any), Cached(companyName of type Any)", "Rows": "4", "DbHits": "0", "children": [
        {"operatorType": "Extract", "KeyNames": "friendLastName, friendFirstName, friendId, workFromYear, companyName", "Rows": "4", "DbHits": "40", "children": [
            {"operatorType": "Filter", "LegacyExpression": "(((hasLabel(company:Company(9)) AND Property(  UNNAMED179,name(14)) == {3}) AND hasLabel(  UNNAMED179:Country(2))) AND Property(worksAt,workFrom(20)) < {2})", "Rows": "4", "DbHits": "24", "children": [
                {"operatorType": "SimplePatternMatcher", "Rows": "4", "DbHits": "16509", "children": [
                    {"operatorType": "Distinct", "KeyNames": "friend", "Rows": "2519", "DbHits": "0", "children": [
                        {"operatorType": "Filter", "LegacyExpression": "(hasLabel(friend:Person(1)) AND NOT(person == friend))", "Rows": "3221", "DbHits": "3221", "children": [
                            {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED30, friend,   UNNAMED31", "Rows": "3221", "DbHits": "3261", "children": []}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery12EmbeddedCypher": {"plan": {"root": {"operatorType": "ColumnFilter", "ColumnsLeft": "keep columns friendId, friendFirstName, friendLastName, tagNames, count", "Rows": "10", "DbHits": "0", "version": "CYPHER 2.2-rule", "children": [
    {"operatorType": "Top", "LegacyExpression": "{3}", "KeyExpressions": "Cached(  INTERNAL_AGGREGATE9ba8c26f-e43a-4e24-8495-22c92d55d958 of type Integer), Cached(friendId of type Any)", "Rows": "10", "DbHits": "0", "children": [
        {"operatorType": "EagerAggregation", "KeyNames": "friendId, friendFirstName, friendLastName", "Rows": "10", "DbHits": "54", "children": [
            {"operatorType": "Extract", "KeyNames": "friendId, friendFirstName, friendLastName", "Rows": "33", "DbHits": "198", "children": [
                {"operatorType": "OptionalMatch", "Rows": "33", "DbHits": "0", "children": [
                    {"operatorType": "Eager", "Rows": "10", "DbHits": "0", "children": [
                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person(1))", "Rows": "10", "DbHits": "10", "children": [
                            {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED25, friend", "Rows": "10", "DbHits": "23", "children": []}
                        ]}
                    ]},
                    {"operatorType": "Eager", "Rows": "25", "DbHits": "0", "children": [
                        {"operatorType": "Filter", "LegacyExpression": "(((((hasLabel(comment:Comment(0)) AND hasLabel(  UNNAMED122:Post(5))) AND hasLabel(tag:Tag(7))) AND hasLabel(tagClass:TagClass(8))) AND hasLabel(baseTagClass:TagClass(8))) AND (Property(tagClass,name(14)) == {2} OR Property(baseTagClass,name(14)) == {2}))", "Rows": "25", "DbHits": "225", "children": [
                            {"operatorType": "Eager", "Rows": "25", "DbHits": "0", "children": [
                                {"operatorType": "PatternMatcher", "Rows": "25", "DbHits": "1584434", "children": [
                                    {"operatorType": "Eager", "Rows": "10", "DbHits": "0", "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person(1))", "Rows": "10", "DbHits": "10", "children": [
                                            {"operatorType": "TraversalMatcher", "KeyNames": "friend,   UNNAMED25, friend", "Rows": "10", "DbHits": "23", "children": []}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery13EmbeddedCypher": {"plan": {"root": {"operatorType": "Projection", "DbHits": "0", "Rows": "1", "version": "CYPHER 2.2-cost", "KeyNames": "pathLength", "EstimatedRows": "1", "children": [
    {"operatorType": "Apply", "Rows": "1", "DbHits": "0", "EstimatedRows": "1", "children": [
        {"operatorType": "CartesianProduct", "Rows": "1", "DbHits": "0", "EstimatedRows": "1", "children": [
            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []},
            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": "1", "DbHits": "1", "EstimatedRows": "1", "children": []}
        ]},
        {"operatorType": "Optional", "Rows": "1", "DbHits": "0", "EstimatedRows": "1", "children": [
            {"operatorType": "ShortestPath", "Rows": "1", "DbHits": "0", "EstimatedRows": "1", "children": [
                {"operatorType": "Argument", "Rows": "1", "DbHits": "0", "EstimatedRows": "1", "children": []}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery14EmbeddedCypher": null};