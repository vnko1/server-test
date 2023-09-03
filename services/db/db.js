const { Pool } = require("pg");
const { tryCatch } = require("../../utils");

const config = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
};
const pool = new Pool(config);

const query = async (query, params) => {
  const { rows, fields } = await pool.query(query, params);

  return { rows, fields };
};

module.exports = { query: tryCatch(query) };
