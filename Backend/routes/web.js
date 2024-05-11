const express = require('express')
const {controllerRegister} = require('../controller/controllerRegister');

const router = express.Router();

router.post("/register", controllerRegister);


module.exports =  router;

