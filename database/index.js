const { sequelize } = require("./config/config");

const { User, Profile } = require("./models");

module.exports = { sequelize, User, Profile };
