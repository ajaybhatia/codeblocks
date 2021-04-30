import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

import Clients from "../clients/collection";

SimpleSchema.extendOptions(["denyInsert"]);

const Tests = new Mongo.Collection("Tests");

Tests.attachSchema(
  new SimpleSchema({
    name: String,
    clientId: String,
    createdAt: {
      type: Date,
      autoValue() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return { $setOnInsert: new Date() };
        } else {
          this.unset();
        }
      },
    },
    updatedAt: {
      type: Date,
      autoValue() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true,
    },
  })
);

Tests.addLinks({
  client: {
    type: "one",
    collection: Clients,
    field: "clientId",
  },
});

Clients.addLinks({
  tests: {
    collection: Tests,
    inversedBy: "client",
  },
});

export default Tests;
