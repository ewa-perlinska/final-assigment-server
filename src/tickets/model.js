const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Event = require("../events/model");
const User = require("../user/model");
const Comment = require("../comments/model");

const Ticket = sequelize.define("ticket", {
  imageUrl: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Comment.belongsTo(Ticket);
Ticket.hasMany(Comment);
module.exports = Ticket;
