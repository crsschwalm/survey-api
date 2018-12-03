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
      .then(user => res.json(user))
      .catch(err => res.status(401).send(err));
  },

  findUserById: (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
      .then(user => res.json(user))
      .catch(err => res.status(401).send(err));
  },

  authenticate: (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      User.authenticate(username, password)
        .then(user => res.json(user))
        .catch(err => res.status(401).send(err));
    } else {
      res
        .status(401)
        .send('Failed Authentication, Username and Password are required');
    }
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
