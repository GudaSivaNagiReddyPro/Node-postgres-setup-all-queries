"use strict";
require("dotenv").config();
const express = require("express");

const app = express();

app.use("/api",require("./routers/index"))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
