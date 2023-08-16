import express from "express";

const port = 8000;

const app = express();

app.get("/hello", (request, response) => {
  response.end("Привет!");
});

app.listen(port, () => {
  `Сервер запущен на http://localhost:${port}`;
});
