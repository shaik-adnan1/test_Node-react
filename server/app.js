const express = require("express");

const app = express();
const tourRouter = require("./routes/tour.routes");

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server side");
});

app.use("/api/v1/tours", tourRouter);

module.exports = app;
