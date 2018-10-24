const User = require("../models/User");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
  createUser: (req, res) => {
    if (
      req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf
    ) {
      const user = new User();
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user.passwordConf = req.body.passwordConf;
      user.save(
        err => {
          if (!!err) {
            res.send(err)
          } else {
            req.session.userId = user._id;
            res.json({ message: "User successfully added!" })
          }
        }
      );
    } else {
      res.json({ message: "Failed adding user, not all credentials provided" });
    }
  },
  authenticate: (req, res) => {
    if (req.body.username && req.body.password) {
      User.authenticate(req.body.username, req.body.password)
        .then((user) => {
          req.session.userId = user._id;
          console.log(req.session)
          res.json(
            { message: "Successfully Logged in!", username: user.username }
          )
        })
        .catch((err) => res.send(err))
    } else {
      res.json({ message: "Failed Authentication, Username and Password are required" });
    }
  },
  logout: (req, res, next) => {
    req.session && req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
}
