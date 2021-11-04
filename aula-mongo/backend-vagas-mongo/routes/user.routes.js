const express = require('express');
const UserController = require('./../controllers/users.controller');

const userController = new UserController(); 

const router = express.Router();

//[POST] - /adduser - cadastra ummm novo  usuario
router.post('/adduser', userController.createUser)

module.exports = router;