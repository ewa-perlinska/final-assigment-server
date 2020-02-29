const Sequelize = require("sequelize");
const sequelize = require("../../db");
const User = require("../user/model");
const Ticket = require("../tickets/model");

const Event = sequelize.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

module.exports = Event;
