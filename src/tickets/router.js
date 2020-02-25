const { Router } = require("express");
const auth = require("../auth/middleWare");
const Ticket = require("./model");
const Event = require("./model");
const router = new Router();

router.get("/events/:id/ticket", async function(request, response, next) {
  try {
    console.log("Boze what is my request?", request.body);
    const eventId = request.params.id;

    const tickets = await Ticket.findAll({
      where: {
        eventId: eventId
      }
    });
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

router.post("/ticket/:id", auth, async (request, response) => {
  console.log("how my request looks???????", request.user.dataValues.id);
  console.log("how my request BODY LOOKS???????", request.body);

  const newTicket = {
    ...request.body,
    userId: request.user.dataValues.id,
    eventId: request.body.eventId
  };
  const ticket = await Ticket.create(newTicket);
  return response.status(201).send(ticket);
});

module.exports = router;
