const { httpError } = require("../utils");

const queryValidation = (schema, message) => (req, _, next) => {
  const { query } = req;

  const { error, value } = schema.validate(query);

  if (error && !message) return next(httpError(400, error.message));

  if (error) return next(httpError(400, message));

  req.query = value;

  next();
};

module.exports = queryValidation;
