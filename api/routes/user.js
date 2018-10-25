const express = require('express');
const userService = require('../services/userService');
const Router = express.Router();

Router.post('/', userService.createUser);
Router.get('/authenticate', userService.authenticate);
Router.get('/logout', userService.logout);
Router.get('/:id', userService.findUserById);

module.exports = Router;
