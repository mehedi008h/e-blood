const express = require("express");
const { getUserProfile } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// user
router.route("/me").get(isAuthenticatedUser, getUserProfile);

module.exports = router;
