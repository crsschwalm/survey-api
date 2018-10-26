const Survey = require('../models/Survey');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    findSurveyById: (req, res) => {
        const surveyId = req.params.id;
        const showAnswers = !!req.query['show-answers'];
        Survey.findById(surveyId)
            .then(survey =>
                showAnswers ?
                    res.json(survey) :
                    res.json(hideAnswers(survey))
            )
            .catch(err => res.status(401).send(err))
    },

    findSurveysByAuthorId: (req, res) => {
        const authorId = req.params.id;
        Survey.find({ authorRef: authorId })
            .then(survey => res.json(survey))
            .catch(err => res.status(401).send(err))
    },

    deleteSurveyById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findByIdAndRemove(surveyId)
            .then(() => res.json({ message: 'Survey successfully deleted!' }))
            .catch(err => res.status(401).send(err))
    },

    updateSurveyById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findByIdAndUpdate(surveyId, { $set: req.body }, { new: true })
            .then(survey => res.json(survey))
            .catch(err => res.status(401).send(err))
    },

    findAllSurveys: (req, res) => {
        Survey.find()
            .then(surveys => res.json(surveys))
            .catch(err => res.status(401).send(err))
    },

    createSurvey: (req, res) => {
        const {
            authorRef,
            name,
            description,
            fields,
            startDate,
            endDate
        } = req.body;
        const survey = new Survey();
        survey.authorRef = authorRef;
        survey.name = name;
        survey.description = description;
        survey.fields = fields;
        survey.startDate = startDate;
        survey.endDate = endDate;
        survey.save()
            .then(survey => res.json({ message: 'Survey successfully added!', id: survey._id }))
            .catch(err => res.status(401).send(err))
    },
}

const hideAnswers = (surveyToTake) => {
    const surveyWithEmptyAnswers = surveyToTake;
    surveyWithEmptyAnswers.fields.forEach(field => field.expectedResponse = null)
    return surveyWithEmptyAnswers;
}