const Response = require('../models/Response');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    sumbitResponse: (req, res) => {
        const response = new Response();
        response.surveyRef = req.body.surveyId;
        //response.user = req.body.user
        response.responses = req.body.responses;
        response.save(
            err =>
                !!err
                    ? res.send(err)
                    : res.json({ message: 'Response successfully added!' })
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
}