const { User } = require("./user");
const { Profile } = require("./profile");

Profile.hasOne(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.belongsTo(Profile, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.sync({ alter: true });
Profile.sync({ alter: true });

module.exports = { User, Profile };
