const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Required Field: email'],
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Required Field: username'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Required Field: password']
  },
  passwordConf: {
    type: String,
    required: [true, 'Required Field: passwordConf']
  }
});

//authenticate input against database
UserSchema.statics.authenticate = function(username, password) {
  return User.findOne({ username: username })
    .exec()
    .then(user => {
      if (!user) {
        throw 'User not found.';
      }
      return bcrypt.compare(password, user.password).then(res => {
        if (res === true) return user;
        throw 'Incorrect Password.';
      });
    });
};

//hashing a password before saving it to the database
UserSchema.pre('save', async function(next) {
  const user = this;
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const hashedPasswordConf = await bcrypt.hash(user.passwordConf, 10);
  try {
    user.password = hashedPassword;
    user.passwordConf = hashedPasswordConf;
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = { User, UserSchema };
