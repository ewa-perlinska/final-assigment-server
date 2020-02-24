const Sequelize = require("sequelize");
const sequelize = require("../../db");
const User = require("../user/model");

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

Event.belongsTo(User);
User.hasMany(Event);

module.exports = Event;
