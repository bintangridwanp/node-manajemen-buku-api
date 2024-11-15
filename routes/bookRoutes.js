const express = require('express');
const { addBook } = require('../controllers/bookController');

const router = express.Router();

// Rute untuk menambahkan buku
router.post('/books', addBook);

module.exports = router;
