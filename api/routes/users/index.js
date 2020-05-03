const express = require("express");
const router = express.Router();
const users = require("./users");

/**
 * Faker data /posts
 */
router.get("/", (req, res, next) => {
  res.status(200).json(users.UsersData());
});

module.exports = router;
