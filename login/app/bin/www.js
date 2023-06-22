"use strict";

const app = require("../main");

// 포트
const PORT = 8080;

app.listen(PORT, () => {
    console.log("서버 가동");
});