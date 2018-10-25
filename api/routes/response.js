const express = require('express');
const responseService = require('../services/responseService');
const Router = express.Router();

Router.post('/submit', responseService.sumbitResponse);
Router.post('/delete/:id', responseService.deleteResponseById);
Router.get('/all', responseService.findAllResponses);
Router.get('/author/:id', responseService.findResponsesByAuthorId);
Router.get('/find/:id', responseService.findResponseBySurveyId);


module.exports = Router;
