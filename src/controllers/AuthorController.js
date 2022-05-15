import Authors from '../models/Author.js';

class AuthorController {
  static authorList = (request, response) => {
    Authors.find((error, author) => response.status(200).json(author));
  };

  static authorId = (request, response) => {
    const { id } = request.params;
    Authors.findById(id, (error, data) => {
      if (error) {
        response.status(400).send({ message: 'Author not found' });
      }
      response.status(200).send(data);
    });
  };

  static createAuthor = (request, response) => {
    const author = new Authors(request.body);
    author.save((error) => {
      if (error) {
        response.status(500).send({ message: `Error: ${error.message}` });
      }

      response.status(201).send(author.toJSON());
    });
  };

  static updateAuthor = (request, response) => {
    const { id } = request.params;
    Authors.findByIdAndUpdate(id, { $set: request.body }, (error) => {
      if (error) {
        response.status(500).send({ message: error.message });
      }

      response.status(200).send({ message: 'Author was updated' });
    });
  };

  static deleteAuthor = (request, response) => {
    const { id } = request.params;
    Authors.findByIdAndDelete(id, (error) => {
      if (error) response.status(500).send({ message: error.message });

      response.status(200).send({ message: 'Author was removed' });
    });
  };
}

export default AuthorController;
