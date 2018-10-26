const express = require('express');
const responseService = require('../services/responseService');
const Router = express.Router();

Router.post('/', responseService.sumbitResponse)
    .get('/', responseService.findAllResponses);

Router.get('/user/:id', responseService.findResponsesByUserId);

Router.delete('/:id', responseService.deleteResponseById);


module.exports = Router;