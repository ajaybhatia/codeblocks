import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Tests from "./collection";

Meteor.methods({
  addTest(obj) {
    check(obj, Object);
    return Tests.insert(obj);
  },
});
