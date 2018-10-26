const Response = require('../models/Response');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    sumbitResponse: (req, res) => {
        const { surveyRef, userRef, fieldResponses } = req.body;
        const response = new Response();
        response.surveyRef = surveyRef;
        response.userRef = userRef
        response.fieldResponses = fieldResponses;
        response.save()
            .then((response) => res.json({ message: 'Response successfully added!', id: response._id }))
            .catch(err => res.status(401).send(err))
    },

    deleteResponseById: (req, res) => {
        const responseId = req.params.id;
        Response.findByIdAndRemove(responseId)
            .then(() => res.json({ message: 'Response successfully deleted!' }))
            .catch(err => res.status(401).send(err))
    },

    findResponsesBySurveyId: (req, res) => {
        const surveyId = req.params.id;
        Response.find({ surveyRef: surveyId })
            .then(response => res.json(response))
            .catch(err => res.status(401).send(err))
    },

    findAllResponses: (req, res) => {
        Response.find()
            .then(responses => res.json(responses))
            .catch(err => res.status(401).send(err))
    },

    findResponsesByUserId: (req, res) => {
        const userId = req.params.id
        Response.find({ userRef: userId })
            .then(responses => res.json(responses))
            .catch(err => res.status(401).send(err))
    }
}