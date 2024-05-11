const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const { authController } = require("../controller/authController");


router.post("/getUserData", requireAuth, authController);

module.exports = router;
