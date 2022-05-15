import books from '../models/Book.js';

class BooksController {
  static booksList = (request, response) => {
    books.find((error, books) => {
      response.status(200).json(books);
    });
  };

  static bookId = (request, response) => {
    const { id } = request.params;
    books.findById(id, (error, data) => {
      if (error) {
        response.status(400).send({ message: 'Book not found' });
      }
      response.status(200).send(data);
    });
  };

  static createBook = (request, response) => {
    const book = new books(request.body);
    book.save((error) => {
      if (error) {
        response.status(500).send({
          messge: `Couldn't insert ${error.message} - failure`,
        });
      }
      response.status(201).send(book.toJSON());
    });
  };

  static updateBook = (request, response) => {
    const { id } = request.params;
    books.findByIdAndUpdate(id, { $set: request.body }, (error) => {
      if (!error) {
        response.status(200).send({ message: 'Book was updated!!' });
      }

      response.status(500).send({ message: error.message });
    });
  };

  static deleteBook = (request, response) => {
    const { id } = request.params;
    books.findByIdAndDelete(id, (error) => {
      if (error) response.status(500).send({ message: error.message });

      response.status(200).send({ message: 'Book was removed' });
    });
  };
}
export default BooksController;
