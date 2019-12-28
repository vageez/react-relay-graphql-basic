/**
 * @flow
 * @relayHash a9c3ef5bfaed699158d6a503f637d2f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Rocket_rocket$ref } from "./Rocket_rocket.graphql";
export type RocketsQueryVariables = {||};
export type RocketsQueryResponse = {|
  +rockets: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Rocket_rocket$ref
  |}>
|};
export type RocketsQuery = {|
  variables: RocketsQueryVariables,
  response: RocketsQueryResponse,
|};
*/


/*
query RocketsQuery {
  rockets {
    ...Rocket_rocket
    id
  }
}

fragment Rocket_rocket on Rocket {
  id
  name
  active
  boosters
  company
  country
  type
  wikipedia
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RocketsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rockets",
        "storageKey": null,
        "args": null,
        "concreteType": "Rocket",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Rocket_rocket",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RocketsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rockets",
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
  },
  "params": {
    "operationKind": "query",
    "name": "RocketsQuery",
    "id": null,
    "text": "query RocketsQuery {\n  rockets {\n    ...Rocket_rocket\n    id\n  }\n}\n\nfragment Rocket_rocket on Rocket {\n  id\n  name\n  active\n  boosters\n  company\n  country\n  type\n  wikipedia\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'e0ca013c58484b640d2af76790834d2e';
module.exports = node;
