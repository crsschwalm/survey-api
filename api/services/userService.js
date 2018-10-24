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
        err =>
          !!err
            ? res.send(err)
            : res.json({ message: "User successfully added!" })
      );
    } else {
      res.json({ message: "Failed adding user, not all credentials provided" });
    }
  },
  authenticate: (req, res) => {
    if (req.body.username && req.body.password) {
      User.authenticate(req.body.username, req.body.password)
        .then(() => res.json(
          { message: "Successfully Logged in!", username: req.body.username }
        ))
        .catch(() => res.send(err))
    } else {
      res.json({ message: "Failed Authentication, Username and Password are required" });
    }
  }
};
