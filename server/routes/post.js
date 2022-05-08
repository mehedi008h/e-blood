const express = require("express");
const { createPost } = require("../controller/postController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// post
router.route("/post/new").post(isAuthenticatedUser, createPost);

module.exports = router;
