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

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors());

app.set('trust proxy', 1);
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
  })
);

app.use('/api', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
