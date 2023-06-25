const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true})) 
app.use(bodyparser.json());

const port = 3000;

const member = require("./routes/member");
const order = require("./routes/order");
const product = require("./routes/product");

app.use("/member", member);
app.use("/cart", order);
app.use("/product", product);

const dbPool = require("./config/mysql");

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, () => {
    console.log(port + " 포트에서 서버 연결");
});