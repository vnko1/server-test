const tryCatch = (cb) => async (query, params) => {
  try {
    return await cb(query, params);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { tryCatch };
