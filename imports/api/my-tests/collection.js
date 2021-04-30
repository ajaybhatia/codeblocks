import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

import MyClients from "../my-clients/collection";

SimpleSchema.extendOptions(["denyInsert"]);

const MyTests = new Mongo.Collection("MyTests");

MyTests.attachSchema(
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

MyTests.addLinks({
  client: {
    type: "one",
    collection: MyClients,
    field: "clientId",
  },
});

MyClients.addLinks({
  tests: {
    collection: MyTests,
    inversedBy: "client",
  },
});

export default MyTests;
