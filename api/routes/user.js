const express = require('express');
const userService = require('../services/userService');
const Router = express.Router();

Router.post('/create', userService.createUser);
Router.post('/authenticate', userService.authenticate);
Router.get('/logout', userService.logout);

module.exports = Router;
