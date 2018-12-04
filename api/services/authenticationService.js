const { User } = require('../models/User');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

const login = ({ username, password }) =>
  User.authenticate(username, password).then(({ _id }) => _id);

async function authenticate(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  try {
    const userId = await login(req.body);
    req.session.userId = userId;
    return next();
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = authenticate;
