const express = require("express");
const {
  usersSchema,
  editUserSchema,
  querySchema,
} = require("../../schema");
const {
  fieldValidation,
  isValidId,
  queryValidation,
} = require("../../middlewares");
const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../../controllers");

const router = express.Router();

router.get("/", queryValidation(querySchema), getUsers);

router.get("/:ProfileId", isValidId(400, "Wrong id"), getUser);

router.post("/", fieldValidation(usersSchema), addUser);

router.patch(
  "/:ProfileId",
  isValidId(400, "Wrong id"),
  fieldValidation(editUserSchema),
  updateUser
);

router.delete("/:ProfileId", isValidId(400, "Wrong id"), deleteUser);

module.exports = router;
