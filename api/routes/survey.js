const express = require('express');
const surveyService = require('../services/surveyService');
const responseService = require('../services/responseService');
const Router = express.Router();

Router.post('/', surveyService.createSurvey)
    .get('/', surveyService.findAllSurveys);

Router.get('/author/:id', surveyService.findSurveysByAuthorId);

Router.delete('/:id', surveyService.deleteSurveyById)
    .put('/:id', surveyService.updateSurveyById)
    .get('/:id', surveyService.findSurveyById);

Router.get('/:id/response', responseService.findResponsesBySurveyId);

module.exports = Router;
