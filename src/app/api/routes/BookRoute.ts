import { Router } from "express";
import { container } from "tsyringe";
import BooksController from "../controllers/Book/BookController";
import BooksGetAllControler from "../controllers/Book/BookGetAllController";
import { BookCreateValidation } from "../validations";

const booksRouter = Router();

const bookCreateController = container.resolve(BooksController);

booksRouter.get("/", new BooksGetAllControler().getAll);

booksRouter.post("/", BookCreateValidation, (req, res) => bookCreateController.create(req, res));

export default booksRouter;
