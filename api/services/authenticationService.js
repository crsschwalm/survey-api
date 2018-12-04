const { User } = require('../models/User');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

async function authenticate(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  try {
    const { _id } = await User.authenticate(
      req.body.username,
      req.body.password
    );
    req.session.userId = _id;
    res.cookie('userId', _id, { maxAge: 900000, httpOnly: false });
    res.cookie('loggedIn', true, { maxAge: 900000, httpOnly: false });
    return next();
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = authenticate;
