const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const { emailRegex } = require("../../constants");

const User = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { is: emailRegex },
    },
    role: DataTypes.ENUM(["admin", "user"]),
  },
  { createdAt: true, updatedAt: false }
);

module.exports = { User };
