const express = require('express');
const responseService = require('../services/responseService');
const Router = express.Router();

Router.post('/', responseService.sumbitResponse);
Router.get('/:id', responseService.findResponseBySurveyId);
Router.get('/all', responseService.findAllResponses);

module.exports = Router;
