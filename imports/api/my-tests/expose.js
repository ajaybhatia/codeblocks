import { Meteor } from "meteor/meteor";
import MyTests from "./collection";

Meteor.startup(() => {
  if (Meteor.isServer) {
    MyTests.expose();
  }
});
