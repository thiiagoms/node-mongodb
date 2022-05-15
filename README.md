# Project with nodejs and mongodb

## Install

- First, clone the project:

```bash
$ git clone https://github.com/thiiagoms/node-express-mongodb
```

- Second, install dependencies:

```bash
$ cd node-express-mongodb
$ npm install
```

## Run

- Run dev mode with `nodemon`:

```
$ npm run dev
```

## Endpoints

### Books with author

- `GET - /books` - Return all books with/without author
- `GET - /books/:id` - Return single book with/without author`
- `POST - /books` - Create new book
- `PUT - /books/:id` - Update book
- `DELETE - /books/:id` - Delete book

### Author

- `GET - /books` - Return all authors
- `GET - /books/:id` - Return single author
- `POST - /books` - Create new author
- `PUT - /books/:id` - Update author
- `DELETE - /books/:id` - Delete author
