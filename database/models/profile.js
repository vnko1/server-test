const { sequelize } = require("../config/config");
const { DataTypes } = require("sequelize");

const Profile = sequelize.define(
  "Profile",
  {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: DataTypes.ENUM(["male", "female"]),
  },
  { createdAt: false, updatedAt: false }
);

module.exports = { Profile };
