const express = require('express');
const surveyService = require('./services/surveyService');
const responseService = require('./services/responseService');
// import {
//     register,
//     login,
//     logout,
//     isAuthenticated
// } from './api/authenticationService';
const Router = express.Router();

//Admin Only
Router.post('/survey/create', surveyService.createSurvey);
Router.post(
    '/survey/delete/:id',
    surveyService.deleteSurveyById
);
Router.put(
    '/survey/update/:id',
    surveyService.updateSurveyById
);
//Response
Router.post('/response', responseService.sumbitResponse);
Router.get('/response/:id', responseService.findResponseBySurveyId);
Router.get('/response/all', responseService.findAllResponses);

Router.get('/survey/author/:author', surveyService.findAllSurveysByAuthor);
Router.get('/survey/all', surveyService.findAllSurveys);
Router.get('/survey/:id', surveyService.findSurveyById);
Router.get('/survey/to-take/:id', surveyService.findSurveyToTakeById);
//Authentication
// Router.post('/register', register);
// Router.post('/login', login);
// Router.post('/logout', logout);

module.exports = Router;
