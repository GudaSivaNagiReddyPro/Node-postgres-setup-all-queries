const express = require("express");

const router = express.Router();

router.get("/get-user", (req, res) => {
  console.log("this is testing");
});

module.exports = router;
