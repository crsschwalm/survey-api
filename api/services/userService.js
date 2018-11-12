const { User } = require("../models/User");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

module.exports = {
  createUser: (req, res) => {
    const { email, username, password, passwordConf } = req.body;
    if (email && username && password && passwordConf) {
      const user = new User();
      user.email = email;
      user.username = username;
      user.password = password;
      user.passwordConf = passwordConf;
      user
        .save()
        .then(user => {
          req.session.userId = user._id;
          res.json({ message: "User successfully added!" });
        })
        .catch(err => res.status(401).send(err));
    } else {
      res
        .status(401)
        .json({ message: "Failed adding user, not all credentials provided" });
    }
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
        .then(user => {
          req.session.userId = user._id;
          res.send(
            "Successfully Logged in! username: " +
              user.username +
              " id: " +
              user._id
          );
        })
        .catch(err => res.status(401).send(err));
    } else {
      res
        .status(401)
        .send("Failed Authentication, Username and Password are required");
    }
  },

  logout: (req, res, next) => {
    req.session &&
      req.session.destroy(function(err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect("/");
        }
      });
  },

  deleteUserById: (req, res) => {
    const userId = req.params.id;
    if (req.session.userId === userId) {
      User.findByIdAndRemove(userId)
        .then(() => res.json({ message: "User successfully deleted!" }))
        .catch(err => res.status(401).send(err));
    } else {
      res
        .status(401)
        .send("You can only edit the User that is currently authorized");
    }
  },

  updateUserById: (req, res) => {
    const userId = req.params.id;
    if (req.session.userId === userId) {
      User.findByIdAndUpdate(
        userId,
        { $set: req.body },
        { new: true, upsert: true }
      )
        .then(user => res.json(user))
        .catch(err => res.status(401).send(err));
    } else {
      res
        .status(401)
        .send("You can only edit the User that is currently authorized");
    }
  }
};
