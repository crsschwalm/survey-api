const { User } = require('../models/User');
const mongoose = require('mongoose');
const base64 = require('base-64');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

async function authenticate(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }

  const credentials = parseCredentials(req);

  try {
    const { _id } = await User.authenticate(
      credentials.username,
      credentials.password
    );
    req.session.userId = _id;
    res.cookie('userId', _id, { maxAge: 900000, httpOnly: false });
    res.cookie('loggedIn', true, { maxAge: 900000, httpOnly: false });
    return next();
  } catch (err) {
    console.log('err :', err);
    res.status(401).send(err);
  }
}

module.exports = authenticate;

const parseCredentials = req => {
  let basicAuthCredentials = {};
  try {
    const encryptedCredentials = parseAuthorizationHeader(
      req.headers.authorization
    );
    const stringCredentials = base64.decode(encryptedCredentials);
    basicAuthCredentials = parseAuthorizationString(stringCredentials);
  } catch (err) {
    console.error('error in basic auth: ', err);
  }

  return validateUserCredentials(basicAuthCredentials)
    ? basicAuthCredentials
    : req.body;
};

const validateUserCredentials = user =>
  typeof user === 'object' && !!user.username && !!user.password;

const parseAuthorizationHeader = header => {
  const tokens = header.split(' ');
  if (tokens[0] === 'Basic') {
    return tokens[1];
  }
};

const parseAuthorizationString = string => {
  const tokens = string.split(':');
  return { username: tokens[0], password: tokens[1] };
};
