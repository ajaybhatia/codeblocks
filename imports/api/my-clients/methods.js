import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import MyClients from "./collection";

Meteor.methods({
  addClient(obj) {
    check(obj, Object);
    return MyClients.insert(obj);
  },
});
