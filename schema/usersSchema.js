const Joi = require("joi");
const { emailRegex } = require("../constants");

const usersSchema = Joi.object({
  userName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({ "any.only": "Invalid username" }),
  firstName: Joi.string()
    .min(2)
    .max(15)
    .required()
    .messages({ "any.only": "Invalid first name" }),
  lastName: Joi.string()
    .min(2)
    .max(15)
    .required()
    .messages({ "any.only": "Invalid last name" }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Invalid email",
    "any.only": "Invalid email",
  }),
  state: Joi.string()
    .valid("male", "female")
    .required()
    .messages({ "any.only": "State must be male or female" }),
  role: Joi.string()
    .valid("admin", "user")
    .required()
    .messages({ "any.only": "Role must be admin or user" }),
});

const editUserSchema = Joi.object({
  userName: Joi.string()
    .min(2)
    .max(30)
    .messages({ "any.only": "Invalid username" }),
  firstName: Joi.string()
    .min(2)
    .max(15)
    .messages({ "any.only": "Invalid first name" }),
  lastName: Joi.string()
    .min(2)
    .max(15)
    .messages({ "any.only": "Invalid last name" }),
  email: Joi.string().pattern(emailRegex).messages({
    "string.pattern.base": "Invalid email",
    "any.only": "Invalid email",
  }),
  state: Joi.string()
    .valid("male", "female")
    .messages({ "any.only": "State must be male or female" }),
  role: Joi.string()
    .valid("admin", "user")
    .messages({ "any.only": "Role must be admin or user" }),
}).or("userName", "firstName", "lastName", "email", "role", "state");

module.exports = { usersSchema, editUserSchema };
