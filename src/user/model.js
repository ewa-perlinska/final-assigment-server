const Sequelize = require("sequelize");
const db = require("../../db");
const Event = require("../events/model");
const Comment = require("../comments/model");
const Ticket = require("../tickets/model");

const User = db.define("user", {
  username: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false }
});

Event.belongsTo(User);
User.hasMany(Event);

Ticket.belongsTo(User);
User.hasMany(Ticket);

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = User;
