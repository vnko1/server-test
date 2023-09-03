const { User } = require("./user");
const { Profile } = require("./profile");

// Profile.hasOne(User, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
//   foreignKey: "profileId",
// });
// User.belongsTo(Profile, {
//   foreignKey: "profileId",
// });

module.exports = { User, Profile };
