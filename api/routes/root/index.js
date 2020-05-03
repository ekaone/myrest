const express = require("express");
const router = express.Router();

/**
 * Root /
 */
router.get("/", (req, res, next) => {
  res.status(200).json({
    about: {
      author: "Eka",
      country: "Indonesia",
      city: "Jakarta",
      twitter: "https://twitter.com/dannyeka"
    },
    api: [
      { randomfaker: "http://localhost:5001/faker" },
      { posts: "http://localhost:5001/posts" },
      { albums: "http://localhost:5001/albums" },
      { todos: "http://localhost:5001/todos" },
      { users: "http://localhost:5001/users" }
    ]
  });
});

module.exports = router;
