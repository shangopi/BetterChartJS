const express = require("express");
const router = express.Router();
const registerController = require('../Controllers/registerController')

router.post('/register',registerController.registerUser)

module.exports= router