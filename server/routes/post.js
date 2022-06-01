const express = require("express");
const {
    createPost,
    getBloodPost,
    likePost,
} = require("../controller/postController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// post
router.route("/post/new").post(isAuthenticatedUser, createPost);
router.route("/post").get(isAuthenticatedUser, getBloodPost);
router.route("/post/like/:id").put(isAuthenticatedUser, likePost);

module.exports = router;
