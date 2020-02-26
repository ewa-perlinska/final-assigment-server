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

Comment.belongsTo(User);
User.hasMany(Comment);

Comment.belongsTo(Ticket);
Ticket.hasMany(Comment);

module.exports = Comment;
