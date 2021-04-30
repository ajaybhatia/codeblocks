import { Meteor } from "meteor/meteor";
import MyClients from "./collection";

Meteor.startup(() => {
  if (Meteor.isServer) {
    MyClients.expose();
  }
});
