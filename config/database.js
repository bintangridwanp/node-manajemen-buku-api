const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // sesuaikan dengan username MySQL kamu
    password: 'Bintangridwan8', // sesuaikan dengan password MySQL kamu
    database: 'book_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Koneksi ke database berhasil!');
});

module.exports = db;
