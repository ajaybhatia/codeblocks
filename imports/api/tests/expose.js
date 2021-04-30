import { Meteor } from "meteor/meteor";
import Tests from "./collection";

Meteor.startup(() => {
  if (Meteor.isServer) {
    Tests.expose();
  }
});
