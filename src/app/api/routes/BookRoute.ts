import { Router } from "express";
import { container } from "tsyringe";
import BooksCreateController from "../controllers/Book/BookCreateController";
import BooksGetAllControler from "../controllers/Book/BookGetAllController";
import { BookCreateValidation } from "../validations";

const booksRouter = Router();

const bookCreateController = container.resolve(BooksCreateController);

booksRouter.get("/", new BooksGetAllControler().getAll);

booksRouter.post("/", BookCreateValidation, (req, res) => bookCreateController.create(req, res));

export default booksRouter;
