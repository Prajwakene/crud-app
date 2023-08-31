const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  isActive: Boolean,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
