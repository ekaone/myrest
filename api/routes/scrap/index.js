const express = require("express");
const { scraped } = require("./scraped");

const router = express.Router();

router.get("/:uri", (req, res, next) => {
  try {
    const { uri } = req.params;
    const result = scraped(uri);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.json({
      message: error,
    });
  }
});

module.exports = router;
