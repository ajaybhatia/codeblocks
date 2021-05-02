import Tests from "/imports/db/tests/collection";
import Clients from "/imports/db/clients/collection";

Tests.addLinks({
  client: {
    type: "one",
    collection: Clients,
    field: "clientId",
  },
});
