const express = require("express");
const {
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// user
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/users").get(isAuthenticatedUser, allUsers);
router.route("/user/:id").get(isAuthenticatedUser, getUserDetails);

module.exports = router;
