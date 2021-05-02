import Tests from "/imports/db/tests/collection";

const getAllTests = Tests.createQuery("getAllTests", {
  name: 1,
  client: {
    name: 1,
  },
  createdAt: 1,
  updatedAt: 1,
});

export default getAllTests;
