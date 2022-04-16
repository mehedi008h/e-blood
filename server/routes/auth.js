const express = require("express");
const router = express.Router();

const {
    registerUser,
    activeEmail,
    loginUser,
    forgotPassword,
    resetPassword,
    logout,
} = require("../controller/authController");

// authnication
router.route("/register").post(registerUser);
router.route("/activation").post(activeEmail);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);

module.exports = router;
