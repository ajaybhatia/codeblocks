import { Meteor } from "meteor/meteor";
import Clients from "./collection";

Meteor.startup(() => {
  if (Meteor.isServer) {
    Clients.expose();
  }
});
