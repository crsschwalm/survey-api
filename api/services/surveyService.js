import Survey from '../models/Survey';
import mongoose from 'mongoose';
//For local development, add mongo connection URI to .env file -> process.env.REACT_APP_MONGODB_URI
//note Razzle configuration for env variables are all preceded with REACT_APP_
mongoose.connect(process.env.REACT_APP_MONGODB_URI);

export function findSurveyById(req, res) {
    const surveyId = req.params.id;
    Survey.findById(
        surveyId,
        (err, survey) => (!!err ? res.send(err) : res.json(survey))
    );
}

export function findAllSurveysByAuthor(req, res) {
    const surveyAuthor = req.params.author;
    Survey.find(
        { author: surveyAuthor },
        (err, surveys) => (!!err ? res.send(err) : res.json(surveys))
    );
}

export function deleteSurveyById(req, res) {
    const surveyId = req.params.id;
    Survey.findByIdAndRemove(
        surveyId,
        err =>
            !!err
                ? res.send(err)
                : res.json({ message: 'Survey successfully deleted!' })
    );
}

export function updateSurveyById(req, res) {
    const surveyId = req.params.id;
    Survey.findByIdAndUpdate(
        surveyId,
        (err, survey) => (!!err ? res.send(err) : res.json(survey))
    );
}

export function findAllSurveys(req, res) {
    Survey.find((err, surveys) => (!!err ? res.send(err) : res.json(surveys)));
}

export function saveSurvey(req, res) {
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
}
