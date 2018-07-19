const express = require('express');
const surveyService = require('./services/surveyService');
// import {
//     register,
//     login,
//     logout,
//     isAuthenticated
// } from './api/authenticationService';
const Router = express.Router();

//Admin Only
Router.post('/survey/save', surveyService.saveSurvey);
Router.post(
    '/survey/delete/:id',
    surveyService.deleteSurveyById
);
Router.put(
    '/survey/update/:id',
    surveyService.updateSurveyById
);
//Open Routes
Router.get('/survey/author/:author', surveyService.findAllSurveysByAuthor);
Router.get('/survey/all', surveyService.findAllSurveys);
Router.get('/survey/:id', surveyService.findSurveyById);
//Authentication
// Router.post('/register', register);
// Router.post('/login', login);
// Router.post('/logout', logout);

module.exports = Router;
