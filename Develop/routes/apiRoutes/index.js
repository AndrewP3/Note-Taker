const router = require("express").Router();

router.get("/word", function (req, res) {
  res.send("Hello World");
});

module.exports = router;
