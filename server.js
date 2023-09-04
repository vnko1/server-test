const app = require("./app");
const { sequelize } = require("./database");

const { PORT } = process.env;

(async () => {
  try {
    app.listen(process.env.PORT, async () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    });
  } catch (err) {
    console.log(err.message);
    console.error("Unable to connect to the database:", err);
    sequelize.close();
    process.exit(1);
  }
})();
