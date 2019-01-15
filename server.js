require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const session = require('express-session');

const port = process.env.PORT || 5000;
const app = express();

const sessionConfig = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {}
};

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(
    cors({
      credentials: true
    })
  );

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sessionConfig.cookie.secure = true;
}

app.use(session(sessionConfig));

app.use('/api', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
