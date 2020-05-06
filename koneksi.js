var mysql = require('mysql');

// membuat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'al261095an',
    database: 'dbrestapi'
});

conn.connect((err) => {
    if (err) throw err;
    Console.log('mysql terkoneksi');
});

module.exports = conn;