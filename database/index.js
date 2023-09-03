const { sequelize } = require("./config");

const { User, Profile } = require("./models");

module.exports = { sequelize, User, Profile };
