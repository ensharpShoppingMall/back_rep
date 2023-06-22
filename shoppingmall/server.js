var express = require('express');
var app = express();

var dbConfig = require('./config/db.js');

var conn = dbConfig.init();

dbConfig.connect(conn);

app.listen(8080, () => {
    console.log("포트 8080번에서 시작");
})