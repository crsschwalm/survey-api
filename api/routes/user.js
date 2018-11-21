const express = require('express');
const userService = require('../services/userService');
const authenticate = require('../services/authenticationService');
const Router = express.Router();

Router.post('/', userService.createUser);

Router.post('/authenticate', userService.authenticate);

Router.get('/:id', userService.findUserById)
  .delete('/:id', authenticate, userService.deleteUserById)
  .put('/:id', authenticate, userService.updateUserById);

module.exports = Router;
