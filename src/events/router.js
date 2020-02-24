const { Router } = require("express");
const auth = require("../auth/middleWare");
const Event = require("./model");

const router = new Router();

router.post("/events", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  const newEvent = { ...request.body, userId: request.user.dataValues.id };
  const event = await Event.create(newEvent);
  return response.status(201).send(event);
});

module.exports = router;
