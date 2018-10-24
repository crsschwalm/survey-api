const express = require('express');
const surveyRoutes = require('./response');
const responseRoutes = require('./survey');
const userRoutes = require('./user');
const Router = express.Router();

function requireLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}

Router.use('/survey', requireLogin, surveyRoutes);
Router.use('/response', requireLogin, responseRoutes);
Router.use('/user', userRoutes);

module.exports = Router;
