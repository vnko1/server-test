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
    // profileId: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    // },
  },
  { createdAt: false, updatedAt: false }
);

module.exports = { Profile };
