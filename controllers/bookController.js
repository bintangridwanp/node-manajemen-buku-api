const db = require('../config/database');

// Fungsi untuk menambahkan buku
const addBook = (req, res) => {
    const { title, author, year, genre } = req.body;
    const query = 'INSERT INTO books (title, author, year, genre) VALUES (?, ?, ?, ?)';
    db.query(query, [title, author, year, genre], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Buku berhasil ditambahkan!' });
    });
};

module.exports = { addBook };
