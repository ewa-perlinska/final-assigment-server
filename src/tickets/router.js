const { Router } = require("express");
const auth = require("../auth/middleWare");
const Ticket = require("./model");
const Event = require("./model");
const router = new Router();
const User = require("../user/model");
const Comment = require("../comments/model");

router.get("/event/:id", async function(request, response, next) {
  try {
    const eventId = request.params.id;
    console.log("what is my event id here ?", eventId);
    const tickets = await Ticket.findAll({
      where: {
        eventId: eventId
      },

      include: [{ model: Event }, { model: User }]
    });
    response.send(tickets);
    console.log("loool", tickets);
  } catch (error) {
    next(error);
  }
});

// const tickets = await Ticket.findAll({
//   where: {
//     eventId: eventId
//   },

//   include: [{ model: Event }, { model: User }]
// });

// router.get("/ticket/:id", async function(request, response, next) {
//   try {
//     const ticket = await Ticket.findByPk(request.params.id, {
//       include: [{ model: User }, { model: Event }, { model: Comment }]
//     });
//     response.send(ticket);
//     console.log("done");
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/event/:id/ticket/:id", async function(request, response, next) {
//   try {
//     const eventId = request.body.eventId;
//     const ticket = await Ticket.findByPk(request.params.id, {
//       where: {
//         eventId: eventId
//       },
//       include: [{ model: User }, { model: Event }, { model: Comment }]
//     });
//     response.send(ticket);
//     console.log("done");
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/event/:id", auth, async (request, response) => {
//   console.log("how my request looks???????", request.user.dataValues.id);
//   console.log("how my request BODY LOOKS???????", request.body);

//   const newTicket = {
//     ...request.body,
//     userId: request.user.dataValues.id,
//     eventId: request.body.eventId
//   };
//   const ticket = await Ticket.create(newTicket);
//   return response.status(201).send(ticket);
// });

// router.put("/ticket/:id", async function(request, response, next) {
//   try {
//     const ticket = await Ticket.findByPk(request.params.id);
//     if (ticket) {
//       return response.send(await ticket.update(request.body));
//     } else {
//       return response.status(404).send("Page not Found");
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
