const express = require("express");
const { createPost, getBloodPost } = require("../controller/postController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// post
router.route("/post/new").post(isAuthenticatedUser, createPost);
router.route("/post").get(isAuthenticatedUser, getBloodPost);

module.exports = router;
