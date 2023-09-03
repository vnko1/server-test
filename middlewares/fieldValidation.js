const { httpError } = require("../utils");

const fieldValidation = (schema, message) => (req, _, next) => {
  const { body } = req;

  const { error, value } = schema.validate(body);

  if (error && !message) return next(httpError(400, error.message));

  if (error) return next(httpError(400, message));

  req.body = value;

  next();
};

module.exports = fieldValidation;
