import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

const authorRouter = express.Router();

authorRouter
  .get('/authors', AuthorController.authorList)
  .get('/authors/:id', AuthorController.authorId)
  .post('/authors', AuthorController.createAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.deleteAuthor);

export default authorRouter;
