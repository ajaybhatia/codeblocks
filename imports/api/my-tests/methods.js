import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import MyTests from "./collection";

Meteor.methods({
  addTest(obj) {
    check(obj, Object);
    return MyTests.insert(obj);
  },
});
