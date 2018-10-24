const express = require('express');
const surveyService = require('../services/surveyService');
const Router = express.Router();

Router.post('/create', surveyService.createSurvey);
Router.post(
    '/delete/:id',
    surveyService.deleteSurveyById
);
Router.put(
    '/update/:id',
    surveyService.updateSurveyById
);
Router.get('/author/:author', surveyService.findAllSurveysByAuthor);
Router.get('/all', surveyService.findAllSurveys);
Router.get('/to-take/:id', surveyService.findSurveyToTakeById);
Router.get('/:id', surveyService.findSurveyById);

module.exports = Router;
