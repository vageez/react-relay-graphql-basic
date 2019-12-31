/**
 * @flow
 * @relayHash f603834be7e1fa49aff03935f27fe60e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryVariables = {|
  limit: number,
  offset: number,
|};
export type appQueryResponse = {|
  +rocketsResult: ?{|
    +result: ?{|
      +totalCount: ?number
    |},
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +name: ?string,
      +active: ?boolean,
      +boosters: ?number,
      +company: ?string,
      +country: ?string,
      +type: ?string,
      +wikipedia: ?string,
    |}>,
  |}
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery(
  $limit: Int!
  $offset: Int!
) {
  rocketsResult(limit: $limit, offset: $offset) {
    result {
      totalCount
    }
    data {
      id
      name
      active
      boosters
      company
      country
      type
      wikipedia
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "offset",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "rocketsResult",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      },
      {
        "kind": "Variable",
        "name": "offset",
        "variableName": "offset"
      }
    ],
    "concreteType": "RocketsResult",
    "plural": false,
    "selections": [
      {
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "data",
        "storageKey": null,
        "args": null,
        "concreteType": "Rocket",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "active",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "boosters",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "company",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "country",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "wikipedia",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "appQuery",
    "id": null,
    "text": "query appQuery(\n  $limit: Int!\n  $offset: Int!\n) {\n  rocketsResult(limit: $limit, offset: $offset) {\n    result {\n      totalCount\n    }\n    data {\n      id\n      name\n      active\n      boosters\n      company\n      country\n      type\n      wikipedia\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c38c9785d7c3f163f8452e7c2fa283b8';
module.exports = node;
