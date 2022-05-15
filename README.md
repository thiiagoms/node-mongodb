<p align="center">
  <a href="https://github.com/thiiagoms/node-mongodb">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>
     <h3 align="center">Book API with NodeJs, Express and Mongodb :four_leaf_clover: :books:</h3>
</p>

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

- Third, create `.env` and add your Mongo credentials in `.env` file:

```bash
$ cp .env.example .env
$ cat .env

DATABASE_HOST=<your-mongo-host-here>
DATABASE_NAME=<your-mongo-dbname-here>
DATABASE_USER=<your-mongo-dbuser-here>
DATABASE_PASS=<your-mongo-dbass-here>
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
