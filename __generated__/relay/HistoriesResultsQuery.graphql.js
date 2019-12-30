/**
 * @flow
 * @relayHash ea74b3bd5c07713cb73ac425b690d221
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { History_history$ref } from "./History_history.graphql";
export type HistoriesResultsQueryVariables = {||};
export type HistoriesResultsQueryResponse = {|
  +historiesResult: {|
    +result: ?{|
      +totalCount: ?number
    |},
    +data: ?$ReadOnlyArray<?{|
      +$fragmentRefs: History_history$ref
    |}>,
  |}
|};
export type HistoriesResultsQuery = {|
  variables: HistoriesResultsQueryVariables,
  response: HistoriesResultsQueryResponse,
|};
*/


/*
query HistoriesResultsQuery {
  historiesResult {
    result {
      totalCount
    }
    data {
      ...History_history
      id
    }
  }
}

fragment History_history on History {
  details
  flight {
    flightDetails: details
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "result",
  "storageKey": null,
  "args": null,
  "concreteType": "Result",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }
  ]
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HistoriesResultsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "historiesResult",
        "storageKey": null,
        "args": null,
        "concreteType": "HistoriesResult",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "data",
            "storageKey": null,
            "args": null,
            "concreteType": "History",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "History_history",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HistoriesResultsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "historiesResult",
        "storageKey": null,
        "args": null,
        "concreteType": "HistoriesResult",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "data",
            "storageKey": null,
            "args": null,
            "concreteType": "History",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "details",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "flight",
                "storageKey": null,
                "args": null,
                "concreteType": "Launch",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": "flightDetails",
                    "name": "details",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ]
              },
              (v1/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HistoriesResultsQuery",
    "id": null,
    "text": "query HistoriesResultsQuery {\n  historiesResult {\n    result {\n      totalCount\n    }\n    data {\n      ...History_history\n      id\n    }\n  }\n}\n\nfragment History_history on History {\n  details\n  flight {\n    flightDetails: details\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4be6d90dfc80a22d984ac14ec091cef';
module.exports = node;
