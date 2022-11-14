import { Router } from "express";
import BooksCreateController from "../controllers/Book/BookCreateController";
import BooksGetAllControler from "../controllers/Book/BookGetAllController";
import { BookCreateValidation } from "../validations";

const booksRouter = Router();

booksRouter.get("/", new BooksGetAllControler().getAll);

booksRouter.post("/", BookCreateValidation, new BooksCreateController().create);

export default booksRouter;
