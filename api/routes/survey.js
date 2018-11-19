const express = require('express');
const surveyService = require('../services/surveyService');
const responseService = require('../services/responseService');
const authenticate = require('../services/authenticationService');
const Router = express.Router();

Router.get('/', surveyService.findAllSurveys).post(
  '/',
  authenticate,
  surveyService.createSurvey
);

Router.get('/author/:id', surveyService.findSurveysByAuthorId);

Router.get('/:id', surveyService.findSurveyById)
  .put('/:id', authenticate, surveyService.updateSurveyById)
  .delete('/:id', authenticate, surveyService.deleteSurveyById);

Router.get('/:id/response', responseService.findResponsesBySurveyId);

module.exports = Router;
