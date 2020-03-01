const { Router } = require("express");
const auth = require("../auth/middleWare");
const Ticket = require("./model");
const Event = require("./model");
const router = new Router();
const User = require("../user/model");

router.get("/event/:id/", async function(request, response, next) {
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

router.get("/event/:id/ticket/:id", async function(request, response, next) {
  try {
    const eventId = request.body.eventId;
    const ticket = await Ticket.findByPk(request.params.id, {
      where: {
        eventId: eventId
      },
      include: [{ model: User }]
    });
    response.send(ticket);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/event/:id/ticket", auth, async (request, response) => {
  console.log("how my request looks???????", request.user.dataValues.id);
  console.log("how my request BODY LOOKS???????", request.body);
  console.log("what is my reques.body.eventId????????", request.body);

  const newTicket = {
    ...request.body,
    userId: request.user.dataValues.id,
    eventId: request.body.eventId
  };
  const ticket = await Ticket.create(newTicket);
  return response.status(201).send(ticket);
});

router.patch("/ticket/:id", async function(request, response, next) {
  try {
    const ticket = await Ticket.findByPk(request.params.id);
    if (ticket) {
      return response.send(await ticket.update(request.body));
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
