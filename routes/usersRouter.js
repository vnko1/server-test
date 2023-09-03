const express = require("express");
const { usersSchema, editUserSchema } = require("../schema");
const { fieldValidation, isValidId } = require("../middlewares");
const {
  addUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers");

const router = express.Router();

router.get("/", getUsers);

router.post("/", fieldValidation(usersSchema), addUser);

router.patch(
  "/:userId",
  isValidId(400, "Wrong id"),
  fieldValidation(editUserSchema),
  updateUser
);

router.delete("/:userId", isValidId(400, "Wrong id"), deleteUser);

module.exports = router;
