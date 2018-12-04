const { User } = require('../models/User');
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

module.exports = {
  createUser: (req, res) => {
    const user = new User(req.body);
    return user
      .save()
      .then(({ username, email, _id }) => res.json({ username, email, _id }))
      .catch(err => res.status(401).send(err));
  },

  findUserById: (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
      .then(({ username, email, _id }) => res.json({ username, email, _id }))
      .catch(err => res.status(401).send(err));
  },

  authenticate: (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      User.authenticate(username, password)
        .then(({ username, email, _id }) => {
          req.session.userId = _id;
          res.cookie('userId', _id, { maxAge: 900000, httpOnly: false });
          res.cookie('loggedIn', true, { maxAge: 900000, httpOnly: false });
          return res.json({ username, email, _id });
        })
        .catch(err => res.status(401).send(err));
    } else {
      return res
        .status(401)
        .send('Failed Authentication, Username and Password are required');
    }
  },

  logout: (req, res) => {
    req.session.userId = undefined;
    res.clearCookie('userId');
    res.cookie('loggedIn', false, { maxAge: 900000, httpOnly: false });
    return res.send('logged out');
  },

  deleteUserById: (req, res) => {
    const userId = req.params.id;
    User.findByIdAndRemove(userId)
      .then(() => res.json({ message: 'User successfully deleted!' }))
      .catch(err => res.status(401).send(err));
  },

  updateUserById: (req, res) => {
    const userId = req.params.id;
    User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, upsert: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(401).send(err));
  }
};
