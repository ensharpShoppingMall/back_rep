<<<<<<< Updated upstream
var express = require('express');
var app = express();

var dbConfig = require('./config/db.js');

var conn = dbConfig.init();

dbConfig.connect(conn);

app.listen(8080, () => {
    console.log("포트 8080번에서 시작");
})
=======
const express = require("express");
const app = express();
const memberRouter = require("./routes/member");
const productRouter = require("./routes/product");

const port = 8080;

app.use(express.json({
  limit: '50mb'
}));

app.use("/member", memberRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(port + "서버 가동");
});
>>>>>>> Stashed changes
