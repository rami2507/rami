const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const authController = require("./controller/authController");

// START EXPRESS APP
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// API's
app.get("/", (req, res) => {
  res.send("hello from the overview");
});
app.post("/api/v1/login", authController.login);
app.post("/api/v1/signup", authController.signup);

// VIEWS
// LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});

module.exports = app;
