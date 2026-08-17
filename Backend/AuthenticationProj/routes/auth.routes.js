const express = require('express');
const authController = require('../src/controller/auth.controller');

const router = express.Router();

router.post('/register', authController.RegisterUser);
router.post('/login', authController.LoginUser);
router.get('/logout', authController.LogoutUser);

module.exports = router;