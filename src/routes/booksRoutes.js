import express from 'express';
import BookController from '../controllers/BookController.js';

const booksRouter = express.Router();

booksRouter
  .get('/books', BookController.booksList)
  .get('/books/:id', BookController.bookId)
  .post('/books', BookController.createBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.deleteBook);

export default booksRouter;
