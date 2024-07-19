const express = require('express');
const { getBooks, addBooks, updateBooks, deleteBooks } = require('../controllers/books.controller');
const router = express.Router();

router.get('/books', getBooks);
router.post('/books', addBooks);
router.put('/books', updateBooks);
router.delete('/books', deleteBooks);

module.exports = router;
