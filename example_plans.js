example_plans =

{"Neo4jQuery1EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (:Person {id:{1}})-[path:KNOWS*1..3]-(friend:Person)\nWHERE friend.firstName = {2}\nWITH friend, min(length(path)) AS distance\nORDER BY distance ASC, friend.lastName ASC, friend.id ASC\nLIMIT {3}\nMATCH (friend)-[:PERSON_IS_LOCATED_IN]->(friendCity:City)\nOPTIONAL MATCH (friend)-[studyAt:STUDY_AT]->(uni:University)-[:ORGANISATION_IS_LOCATED_IN]->(uniCity:City)\nWITH friend, collect(CASE uni.name WHEN null THEN null ELSE [uni.name, studyAt.classYear, uniCity.name] END) AS unis, friendCity, distance\nOPTIONAL MATCH (friend)-[worksAt:WORKS_AT]->(company:Company)-[:ORGANISATION_IS_LOCATED_IN]->(companyCountry:Country)\nWITH friend, collect(CASE company.name WHEN null THEN null ELSE [company.name, worksAt.workFrom, companyCountry.name] END) AS companies, unis, friendCity, distance\nRETURN friend.id AS id, friend.lastName AS lastName, distance, friend.birthday AS birthday, friend.creationDate AS creationDate, friend.gender AS gender, friend.browserUsed AS browser, friend.locationIP AS locationIp, friend.email AS emails, friend.languages AS languages, friendCity.name AS cityName, unis, companies\nORDER BY distance ASC, friend.lastName ASC, friend.id ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 982, "parsingTime": 165, "rewritingTime": 258, "semanticCheckTime": 134, "planningTime": 372, "executionPlanBuildingTime": 53}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 272, "Rows": 17, "version": "CYPHER 2.2", "KeyNames": "birthday, companies, cityName, browser, locationIp, lastName, unis, id, languages, creationDate, emails, distance, gender", "EstimatedRows": 1, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 17, "LegacyExpression": "{3}", "EstimatedRows": 1, "KeyExpressions": "  FRESHID838,   FRESHID816,   FRESHID799", "children": [
        {"operatorType": "Projection", "KeyNames": "friendCity,   unis@476, friend,   FRESHID799,   FRESHID838,   FRESHID816,   companies@747", "Rows": 17, "DbHits": 68, "EstimatedRows": 1, "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "friend,   unis@476, friendCity,   distance@122", "Rows": 17, "DbHits": 296, "EstimatedRows": 1, "children": [
                {"operatorType": "Apply", "Rows": 38, "DbHits": 0, "EstimatedRows": 1, "children": [
                    {"operatorType": "EagerAggregation", "KeyNames": "friend, friendCity,   distance@122", "Rows": 17, "DbHits": 104, "EstimatedRows": 0, "children": [
                        {"operatorType": "Apply", "Rows": 17, "DbHits": 0, "EstimatedRows": 0, "children": [
                            {"operatorType": "Top", "DbHits": 0, "Rows": 17, "LegacyExpression": "{3}", "EstimatedRows": 0, "KeyExpressions": "  distance@122,   FRESHID161,   FRESHID182", "children": [
                                {"operatorType": "Projection", "KeyNames": "friend,   distance@122,   FRESHID161,   FRESHID182", "Rows": 17, "DbHits": 68, "EstimatedRows": 0, "children": [
                                    {"operatorType": "EagerAggregation", "KeyNames": "friend", "Rows": 17, "DbHits": 0, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "(Property(friend,firstName(12)) == {2} AND hasLabel(friend:Person))", "Rows": 354, "DbHits": 467124, "EstimatedRows": 0, "children": [
                                            {"operatorType": "Var length expand", "ExpandExpression": "(  UNNAMED7)-[path:KNOWS*]-(friend)", "Rows": 155708, "DbHits": 160845, "EstimatedRows": 0, "children": [
                                                {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]},
                            {"operatorType": "Apply", "Rows": 17, "DbHits": 0, "EstimatedRows": 0, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendCity:City)", "Rows": 17, "DbHits": 17, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(friend)-[  UNNAMED214:PERSON_IS_LOCATED_IN]->(friendCity)", "Rows": 17, "DbHits": 34, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Argument", "Rows": 17, "DbHits": 0, "EstimatedRows": 0, "children": []}
                                    ]}
                                ]},
                                {"operatorType": "Optional", "Rows": 17, "DbHits": 0, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Expand(Into)", "ExpandExpression": "(uni)<-[studyAt:STUDY_AT]-(friend)", "Rows": 13, "DbHits": 245106, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(uni:University)", "Rows": 109157, "DbHits": 109157, "EstimatedRows": 1, "children": [
                                            {"operatorType": "Expand(All)", "ExpandExpression": "(uniCity)<-[  UNNAMED318:ORGANISATION_IS_LOCATED_IN]-(uni)", "Rows": 109157, "DbHits": 132090, "EstimatedRows": 1, "children": [
                                                {"operatorType": "NodeByLabelScan", "LabelName": ":City", "Rows": 22933, "DbHits": 22950, "EstimatedRows": 0, "children": []}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]},
                    {"operatorType": "Optional", "Rows": 38, "DbHits": 0, "EstimatedRows": 0, "children": [
                        {"operatorType": "Expand(Into)", "ExpandExpression": "(company)<-[worksAt:WORKS_AT]-(friend)", "Rows": 37, "DbHits": 395692, "EstimatedRows": 0, "children": [
                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(company:Company)", "Rows": 26775, "DbHits": 26775, "EstimatedRows": 405, "children": [
                                {"operatorType": "Expand(All)", "ExpandExpression": "(companyCountry)<-[  UNNAMED565:ORGANISATION_IS_LOCATED_IN]-(company)", "Rows": 26775, "DbHits": 28662, "EstimatedRows": 405, "children": [
                                    {"operatorType": "NodeByLabelScan", "LabelName": ":Country", "Rows": 1887, "DbHits": 1904, "EstimatedRows": 29, "children": []}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery2EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "cost", "query": "MATCH (:Person {id:{1}})-[:KNOWS]-(friend:Person)<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-(message)\nWHERE message.creationDate <= {2} AND (message:Post OR message:Comment)\nRETURN friend.id AS personId, friend.firstName AS personFirstName, friend.lastName AS personLastName, message.id AS messageId, CASE has(message.content) WHEN true THEN message.content ELSE message.imageFile END AS messageContent,\n message.creationDate AS messageDate\nORDER BY messageDate DESC, messageId ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 225, "parsingTime": 39, "rewritingTime": 9, "semanticCheckTime": 16, "planningTime": 138, "executionPlanBuildingTime": 23}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 180, "Rows": 20, "version": "CYPHER 2.2", "KeyNames": "personId, messageDate, messageContent, messageId, personFirstName, personLastName", "EstimatedRows": 2461, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 20, "LegacyExpression": "{3}", "EstimatedRows": 2461, "KeyExpressions": "  FRESHID412,   FRESHID283", "children": [
        {"operatorType": "Projection", "KeyNames": "friend,   FRESHID283, message,   FRESHID412", "Rows": 5967, "DbHits": 23868, "EstimatedRows": 2461, "children": [
            {"operatorType": "Filter", "LegacyExpression": "(Property(message,creationDate(2)) <= {2} AND Ors(List(hasLabel(message:Post), hasLabel(message:Comment))))", "Rows": 5967, "DbHits": 57407, "EstimatedRows": 2461, "children": [
                {"operatorType": "Expand(All)", "ExpandExpression": "(friend)<-[  UNNAMED50:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(message)", "Rows": 14848, "DbHits": 14858, "EstimatedRows": 10888, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person)", "Rows": 10, "DbHits": 10, "EstimatedRows": 36, "children": [
                        {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED7)-[  UNNAMED25:KNOWS]-(friend)", "Rows": 10, "DbHits": 11, "EstimatedRows": 36, "children": [
                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery3EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (countryX:Country {name:{2}}), (countryY:Country {name:{3}}), (person:Person {id:{1}})\nMATCH (person)-[:KNOWS*1..2]-(friend:Person)-[:PERSON_IS_LOCATED_IN]->()-[:IS_PART_OF]->(country:Country)\nWHERE not(person=friend) AND not(country=countryX) AND not(country=countryY)\nMATCH (friend)<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-(messageX)-[:POST_IS_LOCATED_IN|COMMENT_IS_LOCATED_IN]->(countryX)\nWHERE messageX.creationDate>={4} AND messageX.creationDate<{5}\nWITH friend, countryY, count(DISTINCT messageX) AS xCount\nMATCH (friend)<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-(messageY)-[:POST_IS_LOCATED_IN|COMMENT_IS_LOCATED_IN]->(countryY)\nWHERE messageY.creationDate>={4} AND messageY.creationDate<{5}\nWITH friend.id AS friendId, friend.firstName AS friendFirstName, friend.lastName AS friendLastName , xCount, count(DISTINCT messageY) AS yCount\nRETURN friendId, friendFirstName, friendLastName, xCount, yCount, xCount + yCount AS xyCount\nORDER BY xyCount DESC, friendId ASC\nLIMIT {6}", "compileTimeDetail": {"totalTime": 1272, "parsingTime": 28, "rewritingTime": 17, "semanticCheckTime": 49, "planningTime": 1124, "executionPlanBuildingTime": 54}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 15, "version": "CYPHER 2.2", "KeyNames": "xyCount, friendLastName, friendFirstName, friendId, xCount, yCount", "EstimatedRows": 0, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 15, "LegacyExpression": "{6}", "EstimatedRows": 0, "KeyExpressions": "  FRESHID923,   FRESHID857", "children": [
        {"operatorType": "Projection", "KeyNames": "  friendLastName@790,   friendFirstName@754,   FRESHID857,   yCount@843,   xCount@513,   FRESHID923", "Rows": 15, "DbHits": 0, "EstimatedRows": 0, "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "  friendId@724,   friendFirstName@754,   friendLastName@790,   xCount@513", "Rows": 15, "DbHits": 0, "EstimatedRows": 0, "children": [
                {"operatorType": "Projection", "KeyNames": "  friendLastName@790,   friendFirstName@754,   friendId@724,   xCount@513, messageY", "Rows": 25, "DbHits": 150, "EstimatedRows": 0, "children": [
                    {"operatorType": "Expand(Into)", "ExpandExpression": "(messageY)-[  UNNAMED587:POST_IS_LOCATED_IN|:COMMENT_IS_LOCATED_IN]->(countryY)", "Rows": 25, "DbHits": 5628, "EstimatedRows": 0, "children": [
                        {"operatorType": "Filter", "LegacyExpression": "(Property(messageY,creationDate(2)) < {5} AND Property(messageY,creationDate(2)) >= {4})", "Rows": 2814, "DbHits": 271336, "EstimatedRows": 0, "children": [
                            {"operatorType": "Expand(All)", "ExpandExpression": "(friend)<-[  UNNAMED535:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(messageY)", "Rows": 67834, "DbHits": 67878, "EstimatedRows": 0, "children": [
                                {"operatorType": "EagerAggregation", "KeyNames": "friend, countryY", "Rows": 44, "DbHits": 0, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "NOT(country == countryY)", "Rows": 87, "DbHits": 0, "EstimatedRows": 0, "children": [
                                        {"operatorType": "CartesianProduct", "Rows": 87, "DbHits": 0, "EstimatedRows": 0, "children": [
                                            {"operatorType": "Filter", "LegacyExpression": "((Property(countryX,name(14)) == {2} AND hasLabel(countryX:Country)) AND NOT(country == countryX))", "Rows": 87, "DbHits": 19923, "EstimatedRows": 0, "children": [
                                                {"operatorType": "Expand(All)", "ExpandExpression": "(messageX)-[  UNNAMED343:POST_IS_LOCATED_IN|:COMMENT_IS_LOCATED_IN]->(countryX)", "Rows": 6641, "DbHits": 13282, "EstimatedRows": 0, "children": [
                                                    {"operatorType": "Filter", "LegacyExpression": "(Property(messageX,creationDate(2)) >= {4} AND Property(messageX,creationDate(2)) < {5})", "Rows": 6641, "DbHits": 839552, "EstimatedRows": 0, "children": [
                                                        {"operatorType": "Expand(All)", "ExpandExpression": "(friend)<-[  UNNAMED291:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(messageX)", "Rows": 209888, "DbHits": 210350, "EstimatedRows": 4, "children": [
                                                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(country:Country)", "Rows": 462, "DbHits": 462, "EstimatedRows": 0, "children": [
                                                                {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED164)-[  UNNAMED166:IS_PART_OF]->(country)", "Rows": 462, "DbHits": 924, "EstimatedRows": 0, "children": [
                                                                    {"operatorType": "Expand(All)", "ExpandExpression": "(friend)-[  UNNAMED138:PERSON_IS_LOCATED_IN]->(  UNNAMED164)", "Rows": 462, "DbHits": 924, "EstimatedRows": 33, "children": [
                                                                        {"operatorType": "Filter", "LegacyExpression": "(NOT(person == friend) AND hasLabel(friend:Person))", "Rows": 462, "DbHits": 462, "EstimatedRows": 33, "children": [
                                                                            {"operatorType": "Var length expand", "ExpandExpression": "(person)-[  UNNAMED108:KNOWS*]-(friend)", "Rows": 462, "DbHits": 465, "EstimatedRows": 36, "children": [
                                                                                {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                                                            ]}
                                                                        ]}
                                                                    ]}
                                                                ]}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]},
                                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Country(name)", "Rows": 87, "DbHits": 87, "EstimatedRows": 1, "children": []}
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
]}}}, "Neo4jQuery4EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "cost", "query": "MATCH (person:Person {id:{1}})-[:KNOWS]-(:Person)<-[:POST_HAS_CREATOR]-(post:Post)-[:POST_HAS_TAG]->(tag:Tag)\nWHERE post.creationDate >= {2} AND post.creationDate < {3}\nOPTIONAL MATCH (tag)<-[:POST_HAS_TAG]-(oldPost:Post)\nWHERE oldPost.creationDate < {2}\nWITH tag, post, length(collect(oldPost)) AS oldPostCount\nWHERE oldPostCount=0\nRETURN tag.name AS tagName, length(collect(post)) AS postCount\nORDER BY postCount DESC, tagName ASC\nLIMIT {4}", "compileTimeDetail": {"totalTime": 1498, "parsingTime": 143, "rewritingTime": 210, "semanticCheckTime": 105, "planningTime": 973, "executionPlanBuildingTime": 67}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 0, "version": "CYPHER 2.2", "KeyNames": "tagName, postCount", "EstimatedRows": 2, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 0, "LegacyExpression": "{4}", "EstimatedRows": 2, "KeyExpressions": "  FRESHID361,   FRESHID344", "children": [
        {"operatorType": "Projection", "KeyNames": "  FRESHID344,   FRESHID361", "Rows": 0, "DbHits": 0, "EstimatedRows": 2, "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "  AGGREGATION344", "Rows": 0, "DbHits": 0, "EstimatedRows": 2, "children": [
                {"operatorType": "Projection", "KeyNames": "  AGGREGATION344, post", "Rows": 0, "DbHits": 0, "EstimatedRows": 6, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "length(anon[278]) == Literal(0)", "Rows": 0, "DbHits": 0, "EstimatedRows": 6, "children": [
                        {"operatorType": "EagerAggregation", "KeyNames": "tag, post", "Rows": 612, "DbHits": 0, "EstimatedRows": 55, "children": [
                            {"operatorType": "OptionalExpand(All)", "ExpandExpression": "(tag)<-[  UNNAMED190:POST_HAS_TAG]-(oldPost)", "Rows": 206240, "DbHits": 1325912, "EstimatedRows": 3059, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(tag:Tag)", "Rows": 612, "DbHits": 612, "EstimatedRows": 231, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(post)-[  UNNAMED83:POST_HAS_TAG]->(tag)", "Rows": 612, "DbHits": 781, "EstimatedRows": 231, "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "((hasLabel(post:Post) AND Property(post,creationDate(2)) >= {2}) AND Property(post,creationDate(2)) < {3})", "Rows": 169, "DbHits": 2860, "EstimatedRows": 331, "children": [
                                            {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED41)<-[  UNNAMED50:POST_HAS_CREATOR]-(post)", "Rows": 572, "DbHits": 574, "EstimatedRows": 3682, "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(anon[41]:Person)", "Rows": 2, "DbHits": 2, "EstimatedRows": 36, "children": [
                                                    {"operatorType": "Expand(All)", "ExpandExpression": "(person)-[  UNNAMED31:KNOWS]-(  UNNAMED41)", "Rows": 2, "DbHits": 3, "EstimatedRows": 36, "children": [
                                                        {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
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
]}}}, "Neo4jQuery5EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (person:Person {id:{1}})-[:KNOWS*1..2]-(friend:Person)<-[membership:HAS_MEMBER]-(forum:Forum)\nWHERE membership.joinDate>{2} AND not(person=friend)\nWITH DISTINCT friend, forum\nOPTIONAL MATCH (friend)<-[:POST_HAS_CREATOR]-(post:Post)<-[:CONTAINER_OF]-(forum)\nWITH forum, count(post) AS postCount\nRETURN forum.title AS forumName, postCount\nORDER BY postCount DESC, forum.id ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 511, "parsingTime": 17, "rewritingTime": 15, "semanticCheckTime": 5, "planningTime": 407, "executionPlanBuildingTime": 67}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 40, "Rows": 20, "version": "CYPHER 2.2", "KeyNames": "forumName, postCount", "EstimatedRows": 39, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 20, "LegacyExpression": "{3}", "EstimatedRows": 39, "KeyExpressions": "  FRESHID333,   FRESHID374", "children": [
        {"operatorType": "Projection", "KeyNames": "forum,   FRESHID333,   FRESHID374", "Rows": 17564, "DbHits": 35128, "EstimatedRows": 39, "children": [
            {"operatorType": "Projection", "KeyNames": "forum,   FRESHID333", "Rows": 17564, "DbHits": 0, "EstimatedRows": 39, "children": [
                {"operatorType": "EagerAggregation", "KeyNames": "forum", "Rows": 17564, "DbHits": 0, "EstimatedRows": 39, "children": [
                    {"operatorType": "Apply", "Rows": 25750, "DbHits": 0, "EstimatedRows": 1513, "children": [
                        {"operatorType": "Distinct", "KeyNames": "friend, forum", "Rows": 25748, "DbHits": 0, "EstimatedRows": 1513, "children": [
                            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(forum:Forum) AND Property(membership,joinDate(18)) > {2})", "Rows": 25748, "DbHits": 359925, "EstimatedRows": 1593, "children": [
                                {"operatorType": "Expand(All)", "ExpandExpression": "(friend)<-[membership:HAS_MEMBER]-(forum)", "Rows": 119975, "DbHits": 120437, "EstimatedRows": 5310, "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "(NOT(person == friend) AND hasLabel(friend:Person))", "Rows": 462, "DbHits": 462, "EstimatedRows": 33, "children": [
                                        {"operatorType": "Var length expand", "ExpandExpression": "(person)-[  UNNAMED31:KNOWS*]-(friend)", "Rows": 462, "DbHits": 465, "EstimatedRows": 36, "children": [
                                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]},
                        {"operatorType": "Optional", "Rows": 25750, "DbHits": 0, "EstimatedRows": 1513, "children": [
                            {"operatorType": "Expand(Into)", "ExpandExpression": "(friend)<-[  UNNAMED205:POST_HAS_CREATOR]-(post)", "Rows": 21, "DbHits": 47319395, "EstimatedRows": 2, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(post:Post)", "Rows": 297832, "DbHits": 297832, "EstimatedRows": 16655, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(forum)-[  UNNAMED238:CONTAINER_OF]->(post)", "Rows": 297832, "DbHits": 323580, "EstimatedRows": 16655, "children": [
                                        {"operatorType": "Argument", "Rows": 25748, "DbHits": 0, "EstimatedRows": 1513, "children": []}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery6EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (person:Person {id:{1}})-[:KNOWS*1..2]-(friend:Person)<-[:POST_HAS_CREATOR]-(friendPost:Post)-[:POST_HAS_TAG]->(knownTag:Tag {name:{2}})\nWHERE not(person=friend)\nMATCH (friendPost)-[:POST_HAS_TAG]->(commonTag:Tag)\nWHERE not(commonTag=knownTag)\nWITH DISTINCT commonTag, knownTag, friend\nMATCH (commonTag)<-[:POST_HAS_TAG]-(commonPost:Post)-[:POST_HAS_TAG]->(knownTag)\nWHERE (commonPost)-[:POST_HAS_CREATOR]->(friend)\nRETURN commonTag.name AS tagName, count(commonPost) AS postCount\nORDER BY postCount DESC, tagName ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 394, "parsingTime": 4, "rewritingTime": 10, "semanticCheckTime": 3, "planningTime": 347, "executionPlanBuildingTime": 30}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 10, "version": "CYPHER 2.2", "KeyNames": "tagName, postCount", "EstimatedRows": 0, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 10, "LegacyExpression": "{3}", "EstimatedRows": 0, "KeyExpressions": "  FRESHID456,   FRESHID439", "children": [
        {"operatorType": "EagerAggregation", "KeyNames": "  FRESHID439", "Rows": 12, "DbHits": 0, "EstimatedRows": 0, "children": [
            {"operatorType": "Projection", "KeyNames": "  FRESHID439, commonPost", "Rows": 12, "DbHits": 24, "EstimatedRows": 0, "children": [
                {"operatorType": "Filter", "LegacyExpression": "NOT(anon[310] == anon[345])", "Rows": 12, "DbHits": 0, "EstimatedRows": 0, "children": [
                    {"operatorType": "Expand(Into)", "ExpandExpression": "(commonPost)-[  UNNAMED345:POST_HAS_TAG]->(knownTag)", "Rows": 12, "DbHits": 227, "EstimatedRows": 0, "children": [
                        {"operatorType": "Apply", "Rows": 34, "DbHits": 0, "EstimatedRows": 0, "children": [
                            {"operatorType": "Distinct", "KeyNames": "commonTag, knownTag, friend", "Rows": 12, "DbHits": 0, "EstimatedRows": 0, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "((hasLabel(person:Person) AND NOT(person == friend)) AND Property(person,id(1)) == {1})", "Rows": 12, "DbHits": 815058, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Var length expand", "ExpandExpression": "(friend)-[  UNNAMED31:KNOWS*]-(person)", "Rows": 271686, "DbHits": 277855, "EstimatedRows": 1001, "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person)", "Rows": 29, "DbHits": 29, "EstimatedRows": 28, "children": [
                                            {"operatorType": "Expand(All)", "ExpandExpression": "(friendPost)-[  UNNAMED61:POST_HAS_CREATOR]->(friend)", "Rows": 29, "DbHits": 58, "EstimatedRows": 28, "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "(hasLabel(commonTag:Tag) AND NOT(commonTag == knownTag))", "Rows": 29, "DbHits": 34, "EstimatedRows": 28, "children": [
                                                    {"operatorType": "Expand(All)", "ExpandExpression": "(friendPost)-[  UNNAMED187:POST_HAS_TAG]->(commonTag)", "Rows": 34, "DbHits": 39, "EstimatedRows": 31, "children": [
                                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(friendPost:Post)", "Rows": 5, "DbHits": 5, "EstimatedRows": 44, "children": [
                                                            {"operatorType": "Expand(All)", "ExpandExpression": "(knownTag)<-[  UNNAMED100:POST_HAS_TAG]-(friendPost)", "Rows": 5, "DbHits": 6, "EstimatedRows": 44, "children": [
                                                                {"operatorType": "NodeUniqueIndexSeek", "Index": ":Tag(name)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                                            ]}
                                                        ]}
                                                    ]}
                                                ]}
                                            ]}
                                        ]}
                                    ]}
                                ]}
                            ]},
                            {"operatorType": "SemiApply", "Rows": 34, "DbHits": 0, "EstimatedRows": 3, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(commonPost:Post)", "Rows": 13922, "DbHits": 13922, "EstimatedRows": 4, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(commonTag)<-[  UNNAMED310:POST_HAS_TAG]-(commonPost)", "Rows": 13922, "DbHits": 13934, "EstimatedRows": 4, "children": [
                                        {"operatorType": "Argument", "Rows": 12, "DbHits": 0, "EstimatedRows": 0, "children": []}
                                    ]}
                                ]},
                                {"operatorType": "Expand(Into)", "ExpandExpression": "(friend)<-[  UNNAMED392:POST_HAS_CREATOR]-(commonPost)", "Rows": 0, "DbHits": 2428760, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Argument", "Rows": 13922, "DbHits": 0, "EstimatedRows": 4, "children": []}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery7EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "cost", "query": "MATCH (person:Person {id:{1}})<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-(message)<-[like:LIKES_POST|LIKES_COMMENT]-(liker:Person)\nWITH liker, message, like.creationDate AS likeCreationDate, person\nORDER BY likeCreationDate DESC, message.id ASC\nWITH liker, head(collect({msg: message, likeTime: likeCreationDate})) AS latestLike, person\nRETURN liker.id AS personId, liker.firstName AS personFirstName, liker.lastName AS personLastName, latestLike.likeTime AS likeTime, not((liker)-[:KNOWS]-(person)) AS isNew, latestLike.msg.id AS messageId, CASE has(latestLike.msg.content) WHEN true THEN latestLike.msg.content ELSE latestLike.msg.imageFile END AS messageContent, latestLike.likeTime - latestLike.msg.creationDate AS latencyAsMilli\nORDER BY likeTime DESC, personId ASC\nLIMIT {2}", "compileTimeDetail": {"totalTime": 1193, "parsingTime": 170, "rewritingTime": 193, "semanticCheckTime": 157, "planningTime": 594, "executionPlanBuildingTime": 79}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 220, "Rows": 20, "version": "CYPHER 2.2", "KeyNames": "personId, latencyAsMilli, messageContent, messageId, isNew, likeTime, personFirstName, personLastName", "EstimatedRows": 14, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 20, "LegacyExpression": "{2}", "EstimatedRows": 14, "KeyExpressions": "  FRESHID446,   FRESHID349", "children": [
        {"operatorType": "Projection", "KeyNames": "  FRESHID349,   FRESHID446,   AGGREGATION261, person, liker", "Rows": 2193, "DbHits": 4386, "EstimatedRows": 14, "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "liker, person", "Rows": 2193, "DbHits": 0, "EstimatedRows": 14, "children": [
                {"operatorType": "Sort", "KeyNames": "likeCreationDate,   FRESHID237", "Rows": 7813, "DbHits": 0, "EstimatedRows": 188, "children": [
                    {"operatorType": "Projection", "KeyNames": "  FRESHID237, likeCreationDate, person, message, liker", "Rows": 7813, "DbHits": 15626, "EstimatedRows": 188, "children": [
                        {"operatorType": "Projection", "KeyNames": "liker, message, likeCreationDate, person", "Rows": 7813, "DbHits": 15626, "EstimatedRows": 188, "children": [
                            {"operatorType": "Filter", "LegacyExpression": "hasLabel(liker:Person)", "Rows": 7813, "DbHits": 7813, "EstimatedRows": 188, "children": [
                                {"operatorType": "Expand(All)", "ExpandExpression": "(message)<-[like:LIKES_POST|:LIKES_COMMENT]-(liker)", "Rows": 7813, "DbHits": 12743, "EstimatedRows": 188, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(person)<-[  UNNAMED31:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(message)", "Rows": 4930, "DbHits": 4931, "EstimatedRows": 301, "children": [
                                        {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery8EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "cost", "query": "MATCH (start:Person {id:{1}})<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-()<-[:REPLY_OF_POST|REPLY_OF_COMMENT]-(comment:Comment)-[:COMMENT_HAS_CREATOR]->(person:Person)\nRETURN person.id AS personId, person.firstName AS personFirstName, person.lastName AS personLastName, comment.id AS commentId, comment.creationDate AS commentCreationDate, comment.content AS commentContent\nORDER BY commentCreationDate DESC, commentId ASC\nLIMIT {2}", "compileTimeDetail": {"totalTime": 859, "parsingTime": 58, "rewritingTime": 166, "semanticCheckTime": 101, "planningTime": 533, "executionPlanBuildingTime": 1}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 160, "Rows": 20, "version": "CYPHER 2.2", "KeyNames": "commentContent, personId, commentCreationDate, commentId, personFirstName, personLastName", "EstimatedRows": 191, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 20, "LegacyExpression": "{2}", "EstimatedRows": 191, "KeyExpressions": "  FRESHID302,   FRESHID277", "children": [
        {"operatorType": "Projection", "KeyNames": "person,   FRESHID277,   FRESHID302, comment", "Rows": 5446, "DbHits": 21784, "EstimatedRows": 191, "children": [
            {"operatorType": "Filter", "LegacyExpression": "(NOT(anon[127] == anon[30]) AND hasLabel(person:Person))", "Rows": 5446, "DbHits": 5446, "EstimatedRows": 191, "children": [
                {"operatorType": "Expand(All)", "ExpandExpression": "(comment)-[  UNNAMED127:COMMENT_HAS_CREATOR]->(person)", "Rows": 5446, "DbHits": 10892, "EstimatedRows": 191, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(comment:Comment)", "Rows": 5446, "DbHits": 5446, "EstimatedRows": 191, "children": [
                        {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED72)<-[  UNNAMED74:REPLY_OF_POST|:REPLY_OF_COMMENT]-(comment)", "Rows": 5446, "DbHits": 10376, "EstimatedRows": 191, "children": [
                            {"operatorType": "Expand(All)", "ExpandExpression": "(start)<-[  UNNAMED30:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(  UNNAMED72)", "Rows": 4930, "DbHits": 4931, "EstimatedRows": 301, "children": [
                                {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery9EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (:Person {id:{1}})-[:KNOWS*1..2]-(friend:Person)<-[:POST_HAS_CREATOR|COMMENT_HAS_CREATOR]-(message)\nWHERE message.creationDate < {2}\nRETURN DISTINCT message.id AS messageId, CASE has(message.content) WHEN true THEN message.content ELSE message.imageFile END AS messageContent,\n message.creationDate AS messageCreationDate, friend.id AS personId, friend.firstName AS personFirstName, friend.lastName AS personLastName\nORDER BY message.creationDate DESC, message.id ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 107, "parsingTime": 4, "rewritingTime": 7, "semanticCheckTime": 4, "planningTime": 87, "executionPlanBuildingTime": 5}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 20, "version": "CYPHER 2.2", "KeyNames": "personId, messageCreationDate, messageContent, messageId, personFirstName, personLastName", "EstimatedRows": 3106, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 20, "LegacyExpression": "{3}", "EstimatedRows": 3106, "KeyExpressions": "  FRESHID292,   FRESHID163", "children": [
        {"operatorType": "Distinct", "KeyNames": "  FRESHID396,   FRESHID336,   FRESHID163,   FRESHID359,   FRESHID292,   FRESHID180", "Rows": 753227, "DbHits": 13478836, "EstimatedRows": 3106, "children": [
            {"operatorType": "Filter", "LegacyExpression": "Property(message,creationDate(2)) < {2}", "Rows": 962774, "DbHits": 2595060, "EstimatedRows": 3269, "children": [
                {"operatorType": "Expand(All)", "ExpandExpression": "(friend)<-[  UNNAMED55:POST_HAS_CREATOR|:COMMENT_HAS_CREATOR]-(message)", "Rows": 1297530, "DbHits": 1300397, "EstimatedRows": 10898, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person)", "Rows": 2867, "DbHits": 2867, "EstimatedRows": 36, "children": [
                        {"operatorType": "Var length expand", "ExpandExpression": "(  UNNAMED7)-[  UNNAMED25:KNOWS*]-(friend)", "Rows": 2867, "DbHits": 2888, "EstimatedRows": 36, "children": [
                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery10EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (person:Person {id:{1}})-[:KNOWS*2..2]-(friend:Person)-[:PERSON_IS_LOCATED_IN]->(city:City)\nWHERE ((friend.birthday_month = {2} AND friend.birthday_day >= 21) OR (friend.birthday_month = ({2}%12)+1 AND friend.birthday_day < 22)) AND not(friend=person) AND not((friend)-[:KNOWS]-(person))\nWITH DISTINCT friend, city, person\nOPTIONAL MATCH (friend)<-[:POST_HAS_CREATOR]-(post:Post)\nWITH friend, city, collect(post) AS posts, person\nWITH friend, city, length(posts) AS postCount, length([p IN posts WHERE (p)-[:POST_HAS_TAG]->(:Tag)<-[:HAS_INTEREST]-(person)]) AS commonPostCount\nRETURN friend.id AS personId, friend.firstName AS personFirstName, friend.lastName AS personLastName, friend.gender AS personGender, city.name AS personCityName, commonPostCount - (postCount - commonPostCount) AS commonInterestScore\nORDER BY commonInterestScore DESC, personId ASC\nLIMIT {4}", "compileTimeDetail": {"totalTime": 317, "parsingTime": 24, "rewritingTime": 31, "semanticCheckTime": 17, "planningTime": 222, "executionPlanBuildingTime": 23}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 80, "Rows": 10, "version": "CYPHER 2.2", "KeyNames": "personId, commonInterestScore, personCityName, personGender, personFirstName, personLastName", "EstimatedRows": 0, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 10, "LegacyExpression": "{4}", "EstimatedRows": 0, "KeyExpressions": "  FRESHID761,   FRESHID597", "children": [
        {"operatorType": "Projection", "KeyNames": "  FRESHID597, friend, city,   FRESHID761", "Rows": 194, "DbHits": 388, "EstimatedRows": 0, "children": [
            {"operatorType": "EagerAggregation", "KeyNames": "friend, city, person", "Rows": 194, "DbHits": 0, "EstimatedRows": 0, "children": [
                {"operatorType": "Apply", "Rows": 23382, "DbHits": 0, "EstimatedRows": 0, "children": [
                    {"operatorType": "Distinct", "KeyNames": "friend, city, person", "Rows": 194, "DbHits": 0, "EstimatedRows": 0, "children": [
                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(city:City)", "Rows": 235, "DbHits": 235, "EstimatedRows": 0, "children": [
                            {"operatorType": "Expand(All)", "ExpandExpression": "(friend)-[  UNNAMED61:PERSON_IS_LOCATED_IN]->(city)", "Rows": 235, "DbHits": 470, "EstimatedRows": 0, "children": [
                                {"operatorType": "AntiSemiApply", "Rows": 235, "DbHits": 0, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Filter", "LegacyExpression": "(((((Ors(List(Property(friend,birthday_day(6)) < Literal(22), Property(friend,birthday_month(13)) == {2})) AND Ors(List(Property(friend,birthday_day(6)) >= Literal(21), Property(friend,birthday_day(6)) < Literal(22)))) AND Ors(List(Property(friend,birthday_day(6)) >= Literal(21), Property(friend,birthday_month(13)) == Add(Modulo({2},Literal(12)),Literal(1))))) AND hasLabel(friend:Person)) AND Ors(List(Property(friend,birthday_month(13)) == Add(Modulo({2},Literal(12)),Literal(1)), Property(friend,birthday_month(13)) == {2}))) AND NOT(friend == person))", "Rows": 239, "DbHits": 36066, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Var length expand", "ExpandExpression": "(person)-[  UNNAMED31:KNOWS*]-(friend)", "Rows": 2558, "DbHits": 2589, "EstimatedRows": 0, "children": [
                                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                        ]}
                                    ]},
                                    {"operatorType": "Expand(Into)", "ExpandExpression": "(person)-[  UNNAMED275:KNOWS]-(friend)", "Rows": 0, "DbHits": 2610, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Argument", "Rows": 239, "DbHits": 0, "EstimatedRows": 0, "children": []}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]},
                    {"operatorType": "Optional", "Rows": 23382, "DbHits": 0, "EstimatedRows": 0, "children": [
                        {"operatorType": "Expand(Into)", "ExpandExpression": "(post)-[  UNNAMED353:POST_HAS_CREATOR]->(friend)", "Rows": 23375, "DbHits": 394410924, "EstimatedRows": 0, "children": [
                            {"operatorType": "NodeByLabelScan", "LabelName": ":Post", "Rows": 197205462, "DbHits": 197205656, "EstimatedRows": 0, "children": []}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery11EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (person:Person {id:{1}})-[:KNOWS*1..2]-(friend:Person)\nWHERE not(person=friend)\nWITH DISTINCT friend\nMATCH (friend)-[worksAt:WORKS_AT]->(company:Company)-[:ORGANISATION_IS_LOCATED_IN]->(:Country {name:{3}})\nWHERE worksAt.workFrom < {2}\nRETURN friend.id AS friendId, friend.firstName AS friendFirstName, friend.lastName AS friendLastName, worksAt.workFrom AS workFromYear, company.name AS companyName\nORDER BY workFromYear ASC, friendId ASC, companyName DESC\nLIMIT {4}", "compileTimeDetail": {"totalTime": 934, "parsingTime": 63, "rewritingTime": 231, "semanticCheckTime": 177, "planningTime": 447, "executionPlanBuildingTime": 16}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 40, "Rows": 10, "version": "CYPHER 2.2", "KeyNames": "friendLastName, friendFirstName, friendId, workFromYear, companyName", "EstimatedRows": 0, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 10, "LegacyExpression": "{4}", "EstimatedRows": 0, "KeyExpressions": "  FRESHID352,   FRESHID256,   FRESHID386", "children": [
        {"operatorType": "Projection", "KeyNames": "  FRESHID256, friend,   FRESHID352,   FRESHID386", "Rows": 14, "DbHits": 84, "EstimatedRows": 0, "children": [
            {"operatorType": "Filter", "LegacyExpression": "(hasLabel(anon[192]:Country) AND Property(anon[192],name(14)) == {3})", "Rows": 14, "DbHits": 4998, "EstimatedRows": 0, "children": [
                {"operatorType": "Expand(All)", "ExpandExpression": "(company)-[  UNNAMED160:ORGANISATION_IS_LOCATED_IN]->(  UNNAMED192)", "Rows": 1666, "DbHits": 3332, "EstimatedRows": 0, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "(Property(worksAt,workFrom(20)) < {2} AND hasLabel(company:Company))", "Rows": 1666, "DbHits": 13710, "EstimatedRows": 0, "children": [
                        {"operatorType": "Expand(All)", "ExpandExpression": "(friend)-[worksAt:WORKS_AT]->(company)", "Rows": 4570, "DbHits": 6665, "EstimatedRows": 0, "children": [
                            {"operatorType": "Distinct", "KeyNames": "friend", "Rows": 2095, "DbHits": 0, "EstimatedRows": 31, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "(NOT(person == friend) AND hasLabel(friend:Person))", "Rows": 2568, "DbHits": 2568, "EstimatedRows": 33, "children": [
                                    {"operatorType": "Var length expand", "ExpandExpression": "(person)-[  UNNAMED31:KNOWS*]-(friend)", "Rows": 2568, "DbHits": 2589, "EstimatedRows": 36, "children": [
                                        {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                                    ]}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery12EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "rule", "query": "MATCH (:Person {id:{1}})-[:KNOWS]-(friend:Person)\nOPTIONAL MATCH (friend)<-[:COMMENT_HAS_CREATOR]-(comment:Comment)-[:REPLY_OF_POST]->(:Post)-[:POST_HAS_TAG]->(tag:Tag)-[:HAS_TYPE]->(tagClass:TagClass)-[:IS_SUBCLASS_OF*0..]->(baseTagClass:TagClass)\nWHERE tagClass.name = {2} OR baseTagClass.name = {2}\nRETURN friend.id AS friendId, friend.firstName AS friendFirstName, friend.lastName AS friendLastName, collect(DISTINCT tag.name) AS tagNames, count(DISTINCT comment) AS count\nORDER BY count DESC, friendId ASC\nLIMIT {3}", "compileTimeDetail": {"totalTime": 1812, "parsingTime": 12, "rewritingTime": 12, "semanticCheckTime": 4, "planningTime": 1675, "executionPlanBuildingTime": 109}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 10, "version": "CYPHER 2.2", "KeyNames": "count, friendLastName, tagNames, friendFirstName, friendId", "EstimatedRows": 6, "planner": "COST", "children": [
    {"operatorType": "Top", "DbHits": 0, "Rows": 10, "LegacyExpression": "{3}", "EstimatedRows": 6, "KeyExpressions": "  FRESHID444,   FRESHID316", "children": [
        {"operatorType": "EagerAggregation", "KeyNames": "  FRESHID316,   FRESHID339,   FRESHID376", "Rows": 10, "DbHits": 182, "EstimatedRows": 6, "children": [
            {"operatorType": "Projection", "KeyNames": "tag,   FRESHID316,   FRESHID339, comment,   FRESHID376", "Rows": 89, "DbHits": 534, "EstimatedRows": 36, "children": [
                {"operatorType": "NodeOuterHashJoin", "Rows": 89, "DbHits": 0, "EstimatedRows": 36, "children": [
                    {"operatorType": "Filter", "LegacyExpression": "hasLabel(friend:Person)", "Rows": 10, "DbHits": 10, "EstimatedRows": 36, "children": [
                        {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED7)-[  UNNAMED25:KNOWS]-(friend)", "Rows": 10, "DbHits": 11, "EstimatedRows": 36, "children": [
                            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
                        ]}
                    ]},
                    {"operatorType": "Expand(All)", "ExpandExpression": "(comment)-[  UNNAMED74:COMMENT_HAS_CREATOR]->(friend)", "Rows": 8155, "DbHits": 16310, "EstimatedRows": 0, "children": [
                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(comment:Comment)", "Rows": 8155, "DbHits": 8155, "EstimatedRows": 0, "children": [
                            {"operatorType": "Expand(All)", "ExpandExpression": "(  UNNAMED135)<-[  UNNAMED116:REPLY_OF_POST]-(comment)", "Rows": 8155, "DbHits": 9840, "EstimatedRows": 0, "children": [
                                {"operatorType": "Filter", "LegacyExpression": "hasLabel(anon[135]:Post)", "Rows": 1685, "DbHits": 1685, "EstimatedRows": 0, "children": [
                                    {"operatorType": "Expand(All)", "ExpandExpression": "(tag)<-[  UNNAMED142:POST_HAS_TAG]-(  UNNAMED135)", "Rows": 1685, "DbHits": 1700, "EstimatedRows": 0, "children": [
                                        {"operatorType": "Filter", "LegacyExpression": "hasLabel(tag:Tag)", "Rows": 15, "DbHits": 15, "EstimatedRows": 0, "children": [
                                            {"operatorType": "Expand(All)", "ExpandExpression": "(tagClass)<-[  UNNAMED169:HAS_TYPE]-(tag)", "Rows": 15, "DbHits": 20, "EstimatedRows": 0, "children": [
                                                {"operatorType": "Filter", "LegacyExpression": "(hasLabel(tagClass:TagClass) AND Ors(List(Property(baseTagClass,name(14)) == {2}, Property(tagClass,name(14)) == {2})))", "Rows": 5, "DbHits": 1543, "EstimatedRows": 0, "children": [
                                                    {"operatorType": "Var length expand", "ExpandExpression": "(baseTagClass)-[  UNNAMED202:IS_SUBCLASS_OF*]->(tagClass)", "Rows": 309, "DbHits": 547, "EstimatedRows": 0, "children": [
                                                        {"operatorType": "NodeByLabelScan", "LabelName": ":TagClass", "Rows": 71, "DbHits": 72, "EstimatedRows": 71, "children": []}
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
]}}}, "Neo4jQuery13EmbeddedCypherCost": {"planMeta": {"requestedPlanner": "cost", "usedPlanner": "cost", "defaultPlanner": "cost", "query": "MATCH (person1:Person {id:{1}}), (person2:Person {id:{2}})\nOPTIONAL MATCH path = shortestPath((person1)-[:KNOWS*0..100]-(person2))\nRETURN CASE path IS NULL WHEN true THEN -1 ELSE length(path) END AS pathLength", "compileTimeDetail": {"totalTime": 943, "parsingTime": 141, "rewritingTime": 161, "semanticCheckTime": 157, "planningTime": 460, "executionPlanBuildingTime": 24}}, "plan": {"root": {"operatorType": "Projection", "DbHits": 0, "Rows": 1, "version": "CYPHER 2.2", "KeyNames": "pathLength", "EstimatedRows": 1, "planner": "COST", "children": [
    {"operatorType": "Apply", "Rows": 1, "DbHits": 0, "EstimatedRows": 1, "children": [
        {"operatorType": "CartesianProduct", "Rows": 1, "DbHits": 0, "EstimatedRows": 1, "children": [
            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []},
            {"operatorType": "NodeUniqueIndexSeek", "Index": ":Person(id)", "Rows": 1, "DbHits": 1, "EstimatedRows": 1, "children": []}
        ]},
        {"operatorType": "Optional", "Rows": 1, "DbHits": 0, "EstimatedRows": 1, "children": [
            {"operatorType": "ShortestPath", "Rows": 1, "DbHits": 0, "EstimatedRows": 1, "children": [
                {"operatorType": "Argument", "Rows": 1, "DbHits": 0, "EstimatedRows": 1, "children": []}
            ]}
        ]}
    ]}
]}}}, "Neo4jQuery14EmbeddedCypherCost": null};