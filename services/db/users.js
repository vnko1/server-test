const { query } = require("./db");

const { tables } = require("./tables");

const createTables = async () => {
  return await query(tables);
};

module.exports = { createTables };
