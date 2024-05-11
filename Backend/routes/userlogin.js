const express = require('express')
const router = express.Router();
const { controllerLogin } = require('../controller/controllerLogin');


router.post("/login", controllerLogin);

module.exports = router;