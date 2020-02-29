const Sequelize = require("sequelize");
const sequelize = require("../../db");
const User = require("../user/model");
const Ticket = require("../tickets/model");

const Comment = sequelize.define("comment", {
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Comment;
