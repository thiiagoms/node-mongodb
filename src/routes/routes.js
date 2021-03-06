import express from 'express';
import booksRouter from './booksRoutes.js';
import authorRouter from './authorRoutes.js';

const router = (app) => {
  app.route('/').get((request, response) => {
    response.status(200).send('Learning node');
  });

  app.use(express.json(), booksRouter, authorRouter);
};

export default router;
