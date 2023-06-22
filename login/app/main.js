"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", ".src/views");
app.set("view engine", "ejs");

app.use("/", home);  // use -> 미들 웨어 등록해 주는 메소드

module.exports = app;
