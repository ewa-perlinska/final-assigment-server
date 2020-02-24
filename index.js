const express = require("express");
const db = require("./db");

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
const corsMiddleWare = cors();

app.use(corsMiddleWare);

const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();

app.use(bodyParserMiddleWare);

const userRouter = require("./src/user/router");

app.use(userRouter);

app.get("/ping", (request, response) => {
  response.send("are you there?");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
