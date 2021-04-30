import Clients from "../collection";

const getAllClients = Clients.createQuery({
  name: 1,
  tests: {
    name: 1,
  },
  createdAt: 1,
  updatedAt: 1,
});

export default getAllClients;
