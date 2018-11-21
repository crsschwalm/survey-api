const express = require('express');
const responseService = require('../services/responseService');
const authenticate = require('../services/authenticationService');
const Router = express.Router();

Router.post('/', responseService.sumbitResponse).get(
  '/',
  responseService.findAllResponses
);

Router.get(
  '/:id',
  authenticate,
  responseService.findResponsesBySurveyId
).delete('/:id', authenticate, responseService.deleteResponseById);

module.exports = Router;
