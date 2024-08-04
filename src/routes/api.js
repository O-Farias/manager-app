const express = require("express");
const booksController = require("../Controllers/books-controller");
const loansController = require("../Controllers/loans-controller");
const { ensureAuth } = require("../Middlewares/auth-middleware");
const apiRouter = express.Router();

apiRouter.get("/books", booksController.index);
apiRouter.get("/books/:id", booksController.show);

apiRouter.post("/books", booksController.save);
apiRouter.put("/books/:id", booksController.update);
apiRouter.delete("/books/:id", booksController.delete);

apiRouter.get("/loans", loansController.index);
apiRouter.get("/loans/:id", loansController.show);
apiRouter.post("/loans", ensureAuth, loansController.save);
apiRouter.post("/loans/:id/return", loansController.return);

module.exports = apiRouter;
