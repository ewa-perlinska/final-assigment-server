const { Router } = require("express");
const auth = require("../auth/middleWare");
const Event = require("./model");

const router = new Router();

router.get("/event", async function(request, response, next) {
  try {
    const events = await Event.findAll();
    response.send(events);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.get("/event/:id", async function(request, response, next) {
  try {
    const event = await Event.findByPk(request.params.id);
    response.send(event);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/event", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  const newEvent = { ...request.body, userId: request.user.dataValues.id };
  const event = await Event.create(newEvent);
  return response.status(201).send(event);
});

module.exports = router;
