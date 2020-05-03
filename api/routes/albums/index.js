const express = require("express");
const router = express.Router();
const albums = require("./albums");

/**
 * Faker data /posts
 */
router.get("/", (req, res, next) => {
  res.status(200).json(albums.AlbumsData())
});

module.exports = router;
