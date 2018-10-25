const express = require('express');
const responseService = require('../services/responseService');
const Router = express.Router();

Router.post('/', responseService.sumbitResponse);
Router.delete('/:id', responseService.deleteResponseById);
Router.get('/', responseService.findAllResponses);
Router.get('/user/:id', responseService.findResponsesByUserId);
Router.get('/:id', responseService.findResponseBySurveyId);

module.exports = Router;