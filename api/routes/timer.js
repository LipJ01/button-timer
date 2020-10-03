var express = require("express");
var router = express.Router();

var timerValue = 0;

function runTimer() {
  setInterval(() => {
    timerValue++;
    console.log("Current Time: " + timerValue);
  }, 1000);
}

runTimer();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-type,Accept"
  );
  next();
});

router.get("/get-time", function (req, res, next) {
  res.send({ timerValue: timerValue });
});

router.get("/reset-timer", function (req, res, next) {
  timerValue = 0;
  res.send({ timerValue: timerValue });
});

router.get("/", function (req, res, next) {
  res.send({ timerValue: timerValue });
});

module.exports = router;

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://3.10.159.115:51041", {
  username: "user1",
  password: "pass",
});
client.on("connect", () => {
  console.log("connected");

  client.subscribe("reset-timer", () => {
    client.on("message", (topic, message, packet) => {
      timerValue = 0;
    });
  });
});
