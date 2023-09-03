const { tryCatchWrapper } = require("../utils");
const { query } = require("../services");

const addUser = async (req, res) => {
  // const profile = await query();

  res.json({ data: req.body });
};

const getUsers = (req, res) => {
  const { query } = req;
  console.log("role => ", query.role);
  res.json({ users: { user: "name" } });
};

const deleteUser = (req, res) => {
  const keys = Object.keys(req.params);
  console.log("delete by userId => ", req.params[keys]);
  res.sendStatus(204);
};

const updateUser = (req, res) => {
  const keys = Object.keys(req.params);
  console.log("update by userId => ", req.params[keys]);
  res.json({ data: req.body });
};

module.exports = {
  addUser: tryCatchWrapper(addUser),
  getUsers: tryCatchWrapper(getUsers),
  deleteUser: tryCatchWrapper(deleteUser),
  updateUser: tryCatchWrapper(updateUser),
};
