const express = require('express');
const userService = require('../services/userService');
const Router = express.Router();

Router.post('/', userService.createUser);

Router.post('/authenticate', userService.authenticate);

Router.get('/logout', userService.logout);

Router.get('/:id', userService.findUserById)
    .delete('/:id', userService.deleteUserById)
    .put('/:id', userService.updateUserById);

module.exports = Router;
