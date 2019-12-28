/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Rocket_rocket$ref: FragmentReference;
declare export opaque type Rocket_rocket$fragmentType: Rocket_rocket$ref;
export type Rocket_rocket = {|
  +id: ?string,
  +name: ?string,
  +active: ?boolean,
  +boosters: ?number,
  +company: ?string,
  +country: ?string,
  +type: ?string,
  +wikipedia: ?string,
  +$refType: Rocket_rocket$ref,
|};
export type Rocket_rocket$data = Rocket_rocket;
export type Rocket_rocket$key = {
  +$data?: Rocket_rocket$data,
  +$fragmentRefs: Rocket_rocket$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Rocket_rocket",
  "type": "Rocket",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '2f548921ad7da083377dbfed57c7e321';
module.exports = node;
