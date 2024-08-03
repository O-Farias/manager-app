const express = require("express");
const booksController = require("../controllers/booksController");

const apiRouter = express.Router();

apiRouter.get("/books", booksController.index);
apiRouter.get("/books/:id", booksController.show);
apiRouter.post("/books", booksController.save);
apiRouter.put("/books/:id", booksController.update);
apiRouter.delete("/books/:id", booksController.delete);

module.exports = apiRou;
