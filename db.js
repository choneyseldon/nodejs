const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSCODE,
    database: process.env.DB_NAME,
    port: 3306
});
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;