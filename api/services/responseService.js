const Response = require('../models/Response');
const { validateResponseRequest } = require('./validationService');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
  sumbitResponse: (req, res) => {
    validateResponseRequest(req.body)
      .then(validResponse => {
        const response = new Response(validResponse);
        return response.save().then(submittedResponse =>
          res.json({
            message: 'Response successfully added!',
            id: submittedResponse._id
          })
        );
      })
      .catch(err => res.status(401).send(err));
  },

  deleteResponseById: (req, res) => {
    const responseId = req.params.id;
    Response.findByIdAndRemove(responseId)
      .then(() => res.json({ message: 'Response successfully deleted!' }))
      .catch(err => res.status(401).send(err));
  },

  findResponsesBySurveyId: (req, res) => {
    const surveyId = req.params.id;
    Response.find({ surveyRef: surveyId })
      .then(response => res.json(response))
      .catch(err => res.status(401).send(err));
  },

  findAllResponses: (req, res) => {
    Response.find()
      .then(responses => res.json(responses))
      .catch(err => res.status(401).send(err));
  }
};
