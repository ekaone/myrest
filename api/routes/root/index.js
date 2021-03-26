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
      twitter: "https://twitter.com/dannyeka",
    },
    api: [
      { randomfaker: "https://myrest.now.sh/faker" },
      { posts: "https://myrest.now.sh/posts" },
      { albums: "https://myrest.now.sh/albums" },
      { todos: "https://myrest.now.sh/todos" },
      { users: "https://myrest.now.sh/users" },
      { quotes: "https://myrest.now.sh/quotes" },
      {
        scrap: {
          endpoint: "https://myrest.now.sh/scrap",
          example:
            "https://myrest.now.sh/scrap/https%3A%2F%2Fstackoverflow.com%2F",
        },
      },
    ],
  });
});

module.exports = router;
