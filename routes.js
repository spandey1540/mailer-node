const express = require("express");
const router = express.Router();
const userAuthController = require("./dataController");

router.route("/saveSettings").post(userAuthController.saveSettings);

router.route("/sendandsavemail").post(userAuthController.sendandsavemail);

module.exports = router;
