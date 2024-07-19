const Book = require('../models/Book');

let books = [];

function getBooksById(req, res) {
    const { id } = req.params;
    let response;
    const book = books.find(b => b.id_book == id);
    if (book) {
        response = { error: false, codigo: 200, data: book };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

function getBooks(req, res) {
    res.send({ error: false, codigo: 200, data: books });
}

function addBooks(req, res) {
    const { id_book, id_user, title, type, author, price, photo } = req.body;
    const newBook = new Book(id_book, id_user, title, type, author, price, photo);
    books.push(newBook);
    res.send({ error: false, codigo: 201, data: newBook });
}

function updateBooks(req, res) {
    const { id } = req.body;
    const { id_user, title, type, author, price, photo } = req.body;
    let response;
    const book = books.find(b => b.id_book == id);
    if (book) {
        book.id_user = id_user;
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;
        response = { error: false, codigo: 200, data: book };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

function deleteBooks(req, res) {
    const { id } = req.body;
    let response;
    const index = books.findIndex(b => b.id_book == id);
    if (index !== -1) {
        books.splice(index, 1);
        response = { error: false, codigo: 200, mensaje: 'Book deleted' };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

module.exports = { getBooks, getBooksById, addBooks, updateBooks, deleteBooks };
