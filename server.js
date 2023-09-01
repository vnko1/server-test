const app = require("./app");

(() => {
  try {
    app.listen(process.env.PORT, async () => {
      console.log(
        `Server running. Use our API on port: ${process.env.PORT}`
      );
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
