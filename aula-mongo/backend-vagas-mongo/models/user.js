const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
  user: {type: String, required: true},
  password: {type: String, required: true},
})

const User = mongoose.model('users', UserModel);

module.exports = User;