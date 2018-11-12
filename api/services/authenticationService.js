const auth = require("http-auth");
const { User } = require("../models/User");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error);

const basic = auth.basic({}, (username, password, callback) => {
  User.authenticate(username, password)
    .then(res => callback(true))
    .catch(error => {
      console.error(error);
      callback(false);
    });
});
const authMiddleware = auth.connect(basic);

module.exports = authMiddleware;
