import { Router } from "express";
import BooksCreateController from "../controllers/Books/BooksCreateController";
import BooksGetAllControler from "../controllers/Books/BooksGetAllController";
import { BookCreateValidation } from "../validations";

const booksRouter = Router();

booksRouter.get("/", new BooksGetAllControler().getAll);

booksRouter.post("/", BookCreateValidation, new BooksCreateController().create);

export default booksRouter;
