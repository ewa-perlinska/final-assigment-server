const { Router } = require("express");
const auth = require("../auth/middleWare");
const Comment = require("./model");

const router = new Router();

router.post(
  "/event/:id/ticket/:id/comment",
  auth,
  async (request, response) => {
    console.log("COMENTS how my request looks?", request.user.dataValues.id);
    console.log("crazy ! how my request BODY looks??????", request.body);
    const newComment = { ...request.body, userId: request.user.dataValues.id };
    const comment = await Comment.create(newComment);
    return response.status(201).send(comment);
  }
);

module.exports = router;
