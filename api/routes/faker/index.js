const express = require("express");
const router = express.Router();
const faker = require("./faker");

/**
 * Faker data /faker
 */
router.get("/", (req, res, next) => {
  res.status(200).json(faker.FakerData());
});

module.exports = router;
