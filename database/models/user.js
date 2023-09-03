const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: DataTypes.ENUM(["admin", "user"]),
    // profileId: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: "Profile",
    //     key: "profileId",
    //   },
    // },
  },
  { createdAt: true }
);

User.sync({ alter: true });

module.exports = { User };
