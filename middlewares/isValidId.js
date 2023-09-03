const { httpError } = require("../utils");

const isValidId = (code, message) => (req, _, next) => {
  const key = Object.keys(req.params);

  if (isNaN(req.params[key])) next(httpError(code, message));

  next();
};

module.exports = isValidId;
