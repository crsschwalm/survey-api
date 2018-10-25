const Response = require('../models/Response');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    sumbitResponse: (req, res) => {
        const response = new Response();
        response.surveyRef = req.body.surveyRef;
        response.userRef = req.body.userRef
        response.fieldResponses = req.body.fieldResponses;
        response.save(
            err =>
                !!err
                    ? res.send(err)
                    : res.json({ message: 'Response successfully added!' })
        );
    },
    deleteResponseById: (req, res) => {
        const responseId = req.params.id;
        Response.findByIdAndRemove(
            responseId,
            err =>
                !!err
                    ? res.send(err)
                    : res.json({ message: 'Response successfully deleted!' })
        );
    },
    findResponseBySurveyId: (req, res) => {
        const surveyId = req.params.id;
        Response.find(
            { surveyRef: surveyId },
            (err, response) => (!!err ? res.send(err) : res.json(response))
        );
    },
    findAllResponses: (req, res) => {
        Response.find((err, responses) => (!!err ? res.send(err) : res.json(responses)));
    },
    findResponsesByUserId: (req, res) => {
        const userId = req.params.id
        Response.find({ userRef: userId }, (err, responses) => (!!err ? res.send(err) : res.json(responses)));
    }
}