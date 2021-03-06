import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

SimpleSchema.extendOptions(["denyInsert"]);

const Clients = new Mongo.Collection("Clients");

Clients.attachSchema(
  new SimpleSchema({
    name: String,
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

export default Clients;
