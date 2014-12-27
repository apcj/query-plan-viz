example_plan = {"root": {"operatorType": "Union", "Rows": "8", "DbHits": "0", "version": "CYPHER 2.2-cost", "EstimatedRows": "128", "children": [
    {"operatorType": "Limit", "LegacyExpression": "{  AUTOINT1}", "Rows": "0", "DbHits": "0", "EstimatedRows": "128", "children": [
        {"operatorType": "Distinct", "KeyNames": "element, rating", "Rows": "0", "DbHits": "0", "EstimatedRows": "128", "children": [
            {"operatorType": "Filter", "LegacyExpression": "hasProp(rating)", "Rows": "0", "DbHits": "180", "EstimatedRows": "135", "children": [
                {"operatorType": "AllNodesScan", "Rows": "180", "DbHits": "181", "EstimatedRows": "180", "children": []}
            ]}
        ]}
    ]},
    {"operatorType": "Limit", "LegacyExpression": "{  AUTOINT3}", "Rows": "8", "DbHits": "0", "EstimatedRows": "376", "children": [
        {"operatorType": "Distinct", "KeyNames": "element, rating", "Rows": "8", "DbHits": "36", "EstimatedRows": "376", "children": [
            {"operatorType": "Filter", "LegacyExpression": "hasProp(rating)", "Rows": "18", "DbHits": "530", "EstimatedRows": "395", "children": [
                {"operatorType": "Expand", "ExpandExpression": "(  UNNAMED116)-[:r]-(  UNNAMED123)", "Rows": "530", "DbHits": "710", "EstimatedRows": "527", "children": [
                    {"operatorType": "AllNodesScan", "Rows": "180", "DbHits": "181", "EstimatedRows": "180", "children": []}
                ]}
            ]}
        ]}
    ]}
]}};