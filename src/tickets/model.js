const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Event = require("../events/model");
const User = require("../user/model");

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

Ticket.belongsTo(User);
User.hasMany(Ticket);

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

module.exports = Ticket;
