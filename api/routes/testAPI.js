var express = require("express");
var router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-type,Accept"
  );
  next();
});

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
