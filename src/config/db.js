const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lucy@123",
    database: "devTinder"
})


module.exports = db;