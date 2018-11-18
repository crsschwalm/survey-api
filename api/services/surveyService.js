const Survey = require('../models/Survey');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
  findSurveyById: (req, res) => {
    const surveyId = req.params.id;
    const showAnswers = req.query['show-answers'] === 'true';
    Survey.findById(surveyId)
      .then(
        survey =>
          showAnswers ? res.json(survey) : res.json(hideAnswers(survey))
      )
      .catch(err => res.status(401).send(err));
  },

  findSurveysByAuthorId: (req, res) => {
    const authorId = req.params.id;
    Survey.find({ authorRef: authorId })
      .then(survey => res.json(survey))
      .catch(err => res.status(401).send(err));
  },

  deleteSurveyById: (req, res) => {
    const surveyId = req.params.id;
    Survey.findByIdAndRemove(surveyId)
      .then(() => res.json({ message: 'Survey successfully deleted!' }))
      .catch(err => res.status(401).send(err));
  },

  updateSurveyById: (req, res) => {
    const surveyId = req.params.id;
    Survey.findByIdAndUpdate(surveyId, { $set: req.body }, { new: true })
      .then(survey => res.json(survey))
      .catch(err => res.status(401).send(err));
  },

  findAllSurveys: (req, res) => {
    Survey.find()
      .then(surveys => res.status(200).json(surveys))
      .catch(err => res.status(401).send(err));
  },

  createSurvey: (req, res) => {
    const saveSurveys = [].concat(req.body).map(surveyRequest =>
      validateRequest(surveyRequest)
        .then(saveSurvey)
        .catch(handleBadSurveyReq)
    );

    return Promise.all(saveSurveys)
      .then(responses => {
        //respond 'success' if any surveys are saved
        if (responses.filter(response => response.success).length > 0) {
          return res.status(200).json(responses);
        }
        throw responses;
      })
      .catch(error => res.status(401).send(error));
  }
};

const hideAnswers = surveyToTake => {
  const surveyWithEmptyAnswers = surveyToTake;
  surveyWithEmptyAnswers.fields.forEach(
    field => (field.expectedResponse = null)
  );
  return surveyWithEmptyAnswers;
};

const saveSurvey = surveyInfo => {
  const survey = new Survey(surveyInfo);
  return survey
    .save()
    .then(handleGoodSurveyReq)
    .catch(error => {
      throw error;
    });
};

const validateRequest = request => {
  const { authorRef, name, description, fields } = request;

  return new Promise((resolve, reject) => {
    isUndefined(authorRef) && reject('Required Fields Missing: "authorRef"');
    isUndefined(name) && reject('Required Fields Missing: "name"');
    isUndefined(description) &&
      reject('Required Fields Missing: "description"');
    isUndefined(fields) && reject('Required Fields Missing: "fields"');

    resolve(request);
  });
};

const isUndefined = element => element === undefined;

const handleBadSurveyReq = error => ({
  message: 'Survey failed to add',
  success: false,
  error: JSON.stringify(error)
});

const handleGoodSurveyReq = survey => ({
  message: 'Survey successfully added!',
  success: true,
  id: survey._id
});
