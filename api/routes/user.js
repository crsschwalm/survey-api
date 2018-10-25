const express = require('express');
const userService = require('../services/userService');
const Router = express.Router();

Router.post('/create', userService.createUser);
Router.post('/authenticate', userService.authenticate);
Router.post('/logout', userService.logout);
Router.get('/find/:id', userService.findUserById);

module.exports = Router;
