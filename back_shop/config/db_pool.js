const mysql = require("mysql");

const db = {
    database: "db_shop",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "00000000",
    connectionLimit: 4,
};

const connect = mysql.createConnection(db);
connect.connect();

module.exports = {
    connect
}