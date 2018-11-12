const express = require("express");
const surveyRoutes = require("./survey");
const responseRoutes = require("./response");
const userRoutes = require("./user");
const Router = express.Router();
const authenticate = require("../services/authenticationService");

Router.use("/survey", authenticate, surveyRoutes);
Router.use("/response", authenticate, responseRoutes);
Router.use("/user", userRoutes);

module.exports = Router;
