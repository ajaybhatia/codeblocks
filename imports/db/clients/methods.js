import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import Clients from "./collection";

Meteor.methods({
  addClient(obj) {
    check(obj, Object);
    return Clients.insert(obj);
  },
});
