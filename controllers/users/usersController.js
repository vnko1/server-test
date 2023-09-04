const { tryCatchWrapper, httpError } = require("../../utils");
const { DB } = require("../../services");

const addUser = async (req, res) => {
  const newUser = await DB.createUser(req.body);

  res.json({ data: newUser });
};

const getUsers = async (req, res) => {
  const { query } = req;

  const users = await DB.getAllUsers(query);

  res.json({ data: users });
};

const getUser = async (req, res) => {
  const keys = Object.keys(req.params);

  const user = await DB.getUser(req.params[keys]);

  if (!user) throw httpError(404, "User not exists");

  res.json({ data: user });
};

const updateUser = async (req, res) => {
  const keys = Object.keys(req.params);
  const updatedUser = await DB.editUser(req.body, req.params[keys]);

  res.json({ data: updatedUser });
};

const deleteUser = async (req, res) => {
  const keys = Object.keys(req.params);
  const result = await DB.deleteProfile(req.params[keys]);

  if (!result) throw httpError(404, "User not exists");

  res.sendStatus(204);
};

module.exports = {
  addUser: tryCatchWrapper(addUser),
  getUsers: tryCatchWrapper(getUsers),
  getUser: tryCatchWrapper(getUser),
  deleteUser: tryCatchWrapper(deleteUser),
  updateUser: tryCatchWrapper(updateUser),
};
