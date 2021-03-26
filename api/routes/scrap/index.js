const express = require("express");
const router = express.Router();
const { scraped } = require("./scraped");

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
