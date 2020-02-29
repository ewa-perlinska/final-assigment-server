const { Router } = require("express");
const auth = require("../auth/middleWare");
const Comment = require("./model");
const User = require("../user/model");

const router = new Router();

router.post("/ticket/:id/comment", auth, async (request, response) => {
  console.log("COMENTS how my request looks?", request.user.dataValues.id);
  console.log("crazy ! how my request BODY looks??????", request.body);
  const newComment = { ...request.body, userId: request.user.dataValues.id };
  const comment = await Comment.create(newComment);
  return response.status(201).send(comment);
});

router.get("/ticket/:id/comment", async function(request, response, next) {
  try {
    console.log("whaaaaat is my request?????", request.body);
    console.log("whaaaaat is request params", request.params);
    const ticketId = request.params.id;
    const comments = await Comment.findAll({
      where: {
        ticketId: ticketId
      },
      include: [{ model: User }]
    });
    response.send(comments);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
