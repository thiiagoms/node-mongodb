import express from "express";
import db from "./config/database.mjs";

db.on("error", console.log.bind(console, "Database connection error"));
db.once("open", () => console.log("[*] Database connected!!"));

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "Game of thrones" },
  { id: 2, title: "The Chronicles of Narnia" },
];

app.get("/", (_, response) => {
  response.status(200).send("Node course");
});

app.get("/books", (_, response) => {
  response.status(200).json(books);
});

app.get("/books/:id", (request, response) => {
  let index = searchBooks(request.params.id);
  response.status(200).json(books[index]);
});

app.post("/books", (request, response) => {
  books.push(request.body);
  response.status(201).send("Pushed success");
});

app.put("/books/:id", (request, response) => {
  let index = searchBooks(request.params.id);
  books[index].title = request.body.title;
  response.status(200).json(books);
});

app.delete("/books/:id", (request, response) => {
  let { id } = request.params;
  let index = searchBooks(id);
  books.splice(index, 1);
  response.status(200).send(`Book ${id} removed`);
});

function searchBooks(id) {
  return books.findIndex((book) => book.id === parseInt(id));
}

export default app;
