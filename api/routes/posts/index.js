const express = require("express");
const router = express.Router();
const posts = require("./posts");

/**
 * Faker data /posts
 */
router.get("/", (req, res, next) => {
  res.status(200).json(posts.PostsData());
});

module.exports = router;
