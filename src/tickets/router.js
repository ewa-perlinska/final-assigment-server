const { Router } = require("express");
const auth = require("../auth/middleWare");
const Ticket = require("./model");

const router = new Router();

router.get("/ticket", async function(request, response, next) {
  try {
    const tickets = await Ticket.findAll();
    response.send(tickets);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.get("/ticket/:id", async function(request, response, next) {
  try {
    const ticket = await Ticket.findByPk(request.params.id);
    response.send(ticket);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/ticket", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  const newTicket = { ...request.body, userId: request.user.dataValues.id };
  const ticket = await Ticket.create(newTicket);
  return response.status(201).send(ticket);
});

module.exports = router;
