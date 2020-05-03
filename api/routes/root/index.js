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
      { randomfaker: "https://api.twolevel.net/faker" },
      { posts: "https://api.twolevel.net/posts" },
      { albums: "https://api.twolevel.net/albums" },
      { todos: "https://api.twolevel.net/todos" },
      { users: "https://api.twolevel.net/users" }
    ]
  });
});

module.exports = router;
