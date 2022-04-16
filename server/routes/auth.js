const express = require("express");
const router = express.Router();

const { registerUser, activeEmail } = require("../controller/authController");

router.route("/register").post(registerUser);
router.route("/activation").post(activeEmail);

module.exports = router;
