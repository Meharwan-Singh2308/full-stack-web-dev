const express = require("express");
const app = express();

app.use((req, res, next) => {
  // res.send("middle ware");
  console.log("middle war");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("Hello from profile");
});

app.get("/contact", function (req, res) {
  res.send("hello from contact");
});

app.listen(5500);
