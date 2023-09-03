const app = require("./app");

const { createTables } = require("./services");
(async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server running. Use our API on port: ${process.env.PORT}`
      );
      createTables();
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
