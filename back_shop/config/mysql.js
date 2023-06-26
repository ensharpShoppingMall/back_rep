const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "database-2.cm3dgfqx2hym.ap-northeast-2.rds.amazonaws.com",//process.env.MYSQL_HOST,
    user: "root",//process.env.MYSQL_USER,
    port: "3306",//process.env.MYSQL_PORT,
    password: "00000000",//process.env.MYSQL_PASSWORD,
    database: "db_shop"//process.env.MYSQL_DATABASE 
});

module.exports = connection;