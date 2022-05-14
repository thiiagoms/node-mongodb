import express from "express";
import BooksController from "../controllers/BooksController.js";
import books from "../models/Book.js";

const booksRouter = express.Router();

booksRouter
	.get("/books", BooksController.booksList)
	.get("/books/:id", BooksController.bookId)
	.post("/books", BooksController.createBook)
	.put("/books/:id", BooksController.updateBook)
	.delete("/books/:id", BooksController.deleteBook);

export default booksRouter;
