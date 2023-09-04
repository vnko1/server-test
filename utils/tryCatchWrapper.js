const { httpError } = require("./httpError");

const tryCatchWrapper = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError")
      return next(httpError(400, "This email exists"));
    next(error);
  }
};

module.exports = { tryCatchWrapper };
