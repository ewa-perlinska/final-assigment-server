const express = require("express");
const db = require("./db");

const app = express();
const port = process.env.PORT || 4000;

app.get("/ping", (request, response) => {
  response.send("are you there?");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
