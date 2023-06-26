const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true})) 
app.use(bodyparser.json());

const port = 8080;
require('dotenv').config();
console.log("요고", process.env.MYSQL_HOST)

const member = require("./routes/member");
const order = require("./routes/order");
const product = require("./routes/product");

app.use("/member", member);
app.use("/cart", order);
app.use("/product", product);

console.log(process.env.MYSQL_HOST);

const dbPool = require("./config/mysql");

app.get("/", (req, res) => {
    res.send("mysql 또 수정했어요!");
});

app.listen(port, () => {
    console.log(port + " 포트에서 서버 연결");
});