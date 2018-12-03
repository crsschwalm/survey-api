const express = require('express');
const surveyRoutes = require('./survey');
const responseRoutes = require('./response');
const userRoutes = require('./user');
const Router = express.Router();
const authenticate = require('../services/authenticationService');
const listEndpoints = require('express-list-endpoints');

Router.get('/', (req, res) => res.json(listEndpoints(Router)));

Router.use('/survey', surveyRoutes);
Router.use('/response', authenticate, responseRoutes);
Router.use('/user', userRoutes);

module.exports = Router;
