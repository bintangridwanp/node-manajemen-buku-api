const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

const app = express();
app.use(bodyParser.json());

// Endpoint untuk menambahkan buku
app.post('/books', (req, res) => {
    const { title, author, year, genre } = req.body;
    const query = 'INSERT INTO books (title, author, year, genre) VALUES (?, ?, ?, ?)';
    db.query(query, [title, author, year, genre], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Buku berhasil ditambahkan!' });
    });
});

// Endpoint untuk melihat semua buku
app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
});

// Endpoint untuk mencari buku berdasarkan judul atau pengarang
app.get('/books/search', (req, res) => {
    const { query } = req.query;
    const sqlQuery = 'SELECT * FROM books WHERE title LIKE ? OR author LIKE ?';
    db.query(sqlQuery, [`%${query}%`, `%${query}%`], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
});

// Endpoint untuk mengedit buku
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, year, genre } = req.body;
    const query = 'UPDATE books SET title = ?, author = ?, year = ?, genre = ? WHERE id = ?';
    db.query(query, [title, author, year, genre, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'Buku berhasil diupdate!' });
    });
});

// Endpoint untuk menghapus buku
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM books WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'Buku berhasil dihapus!' });
    });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
