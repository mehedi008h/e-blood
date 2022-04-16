const express = require("express");
const router = express.Router();

const {
    registerUser,
    activeEmail,
    loginUser,
} = require("../controller/authController");

router.route("/register").post(registerUser);
router.route("/activation").post(activeEmail);
router.route("/login").post(loginUser);

module.exports = router;
