const express = require('express');
const router = express.Router();

const { adminController } = require('../controller/adminController');


router.post("/admin", adminController);

module.exports = router;