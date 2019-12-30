/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type History_history$ref: FragmentReference;
declare export opaque type History_history$fragmentType: History_history$ref;
export type History_history = {|
  +details: ?string,
  +flight: ?{|
    +flightDetails: ?string
  |},
  +$refType: History_history$ref,
|};
export type History_history$data = History_history;
export type History_history$key = {
  +$data?: History_history$data,
  +$fragmentRefs: History_history$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "History_history",
  "type": "History",
  "metadata": null,
  "argumentDefinitions": [],
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1bf80c7b1d6d577b4f3b06504137d010';
module.exports = node;
