const UserService = require('./../services/users.service');

const userService = new UserService;

class UserController {
  createUser = async (req, res) => {
    const user = req.body;
    const userSave = await userService.createUser(user)
    .then(() => {
      res.send({ message: 'usuario cadastrado' })
    })
    .catch(err => console.log(err))
  }
}

module.exports = UserController;