import Clients from "/imports/db/clients/collection";

const getAllClients = Clients.createQuery("getAllClients", {
  name: 1,
  tests: {
    name: 1,
  },
  createdAt: 1,
  updatedAt: 1,
});

export default getAllClients;
