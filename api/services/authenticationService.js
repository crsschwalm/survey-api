const { User } = require('../models/User');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

async function authenticate(req, res, next) {
  console.log('req.session :', req.session);
  if (req.session && req.session.userId) {
    return next();
  }

  console.log('req.headers.authorization :', req.headers.authorization);

  console.log('req.body.username :', req.body.username);
  console.log('req.body.password :', req.body.password);

  console.log('req.headers :', req.headers);

  try {
    const { _id } = await User.authenticate(
      req.body.username,
      req.body.password
    );
    req.session.userId = _id;
    res.cookie('userId', _id, { maxAge: 900000, httpOnly: false });
    res.cookie('loggedIn', true, { maxAge: 900000, httpOnly: false });
    console.log('req.session.userId :', req.session.userId);
    return next();
  } catch (err) {
    console.log('err :', err);
    res.status(401).send(err);
  }
}

module.exports = authenticate;
