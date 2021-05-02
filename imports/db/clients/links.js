import Clients from "/imports/db/clients/collection";
import Tests from "/imports/db/tests/collection";

Clients.addLinks({
  tests: {
    collection: Tests,
    inversedBy: "client",
  },
});
