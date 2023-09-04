const Joi = require("joi");

const querySchema = Joi.object({
  role: Joi.string()
    .valid("admin", "user")
    .messages({ "any.only": "Role must be admin or user" }),
});

module.exports = { querySchema };
