require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const surveyExamples = require('./api/exampleSurveys')
const routes = require('./api/routes');

app.get('/api/getExampleSurveys', (req, res) => {
  res.send({ surveys: surveyExamples });
});

app.get('/api/getExampleSurvey/:surveyId', (req, res) => {
  const survey = surveyExamples.filter(survey => survey.id === req.params.surveyId)[0];
  res.send({ survey: survey });
});

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
