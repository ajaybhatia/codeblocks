import MyTests from "../collection";

const getAllTests = MyTests.createQuery({
  name: 1,
  client: {
    name: 1,
  },
  createdAt: 1,
  updatedAt: 1,
});

export default getAllTests;
