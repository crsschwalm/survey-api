const express = require('express');
const surveyService = require('../services/surveyService');
const Router = express.Router();

Router.post('/', surveyService.createSurvey);
Router.delete('/:id', surveyService.deleteSurveyById);
Router.put('/:id', surveyService.updateSurveyById);

Router.get('/', surveyService.findAllSurveys);
Router.get('/author/:id', surveyService.findSurveysByAuthorId);
Router.get('/:id', surveyService.findSurveyById);

module.exports = Router;
