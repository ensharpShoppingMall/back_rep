const mysql = require("mysql");
const dbInformation = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "00000000",
    database: "db_shop"
};

module.exports = {
    init: function() {
        return mysql.createConnection(dbInformation);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) {
                console.log("mysql 연결 에러 :" + err);
            }
            else{
                console.log("mysql 연결 성공");
            }
        });
    }
};