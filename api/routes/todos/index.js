const express = require("express");
const router = express.Router();
const todos = require("./todos");

/**
 * Faker data /posts
 */
router.get("/", (req, res, next) => {
  res.status(200).json(todos.TodosData());
});

module.exports = router;
