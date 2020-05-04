const express = require("express");
const router = express.Router();
const quotes = require("./quotes");

/**
 * Faker data /posts
 */
router.get("/", (req, res, next) => {
  res.status(200).json(quotes.QuotesData());
});

module.exports = router;
