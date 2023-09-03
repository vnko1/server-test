const { query } = require("./db/db");
const { createTables } = require("./db/users");

module.exports = { query, createTables };
