const User = require('./../models/user');


class UserService {
  createUser = async (user) => await User.create(user);
}

module.exports = UserService;