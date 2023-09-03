const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const Profile = sequelize.define(
  "Profile",
  {
    // profileId: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    // },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: DataTypes.ENUM(["male", "female"]),
  },
  { createdAt: false }
);

Profile.sync({ alter: true });

module.exports = { Profile };
