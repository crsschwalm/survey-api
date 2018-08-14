const Survey = require('../models/Survey');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    findSurveyById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findById(
            surveyId,
            (err, survey) => (!!err ? res.send(err) : res.json(survey))
        );
    },

    findSurveyToTakeById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findById(
            surveyId,
            (err, survey) => (!!err ? res.send(err) : res.json(hideAnswers(survey)))
        );
    },

    findAllSurveysByAuthor: (req, res) => {
        const surveyAuthor = req.params.author;
        Survey.find(
            { author: surveyAuthor },
            (err, surveys) => (!!err ? res.send(err) : res.json(surveys))
        );
    },

    deleteSurveyById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findByIdAndRemove(
            surveyId,
            err =>
                !!err
                    ? res.send(err)
                    : res.json({ message: 'Survey successfully deleted!' })
        );
    },

    updateSurveyById: (req, res) => {
        const surveyId = req.params.id;
        Survey.findByIdAndUpdate(
            surveyId, { $set: req.body }, { new: true },
            (err, survey) => (!!err ? res.send(err) : res.json(survey))
        );
    },

    findAllSurveys: (req, res) => {
        Survey.find((err, surveys) => (!!err ? res.send(err) : res.json(surveys)));
    },

    createSurvey: (req, res) => {
        const survey = new Survey();
        survey.author = req.body.author;
        survey.name = req.body.name;
        survey.description = req.body.description;
        survey.fields = req.body.fields;
        survey.startDate = req.body.startDate;
        survey.endDate = req.body.endDate;
        survey.save(
            err =>
                !!err
                    ? res.send(err)
                    : res.json({ message: 'Survey successfully added!' })
        );
    },
}

const hideAnswers = (surveyToTake) => {
    const surveyWithEmptyAnswers = surveyToTake;
    surveyWithEmptyAnswers.fields = cleanFields(surveyToTake.fields);
    return surveyWithEmptyAnswers;
}

const cleanFields = (fields) => fields.map(field => {
    if (!!field.options) {
        field.options = cleanOptions(field)
    }
    if (!!field.expectedResponse) {
        const cleanTextResponse = '';
        field.expectedResponse = cleanTextResponse
    }
    return field;
})

const cleanOptions = field => {
    const cleanOptions = {};
    Object.keys(field.options).forEach(key => cleanOptions[key] = false);
    return cleanOptions;
}