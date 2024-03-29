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

app.get("/ping", (request, response) => {
  response.send("are you there?");
});

const userRoutes = require("./src/user/router");
const eventRoutes = require("./src/events/router");
const ticketRoutes = require("./src/tickets/router");
const commentRoutes = require("./src/comments/router");

app.use(eventRoutes);
app.use(userRoutes);
app.use(ticketRoutes);
app.use(commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
