import { Router } from "express";
import BooksCreateController from "../controllers/Books/BooksCreateController";
import BooksGetAllControler from "../controllers/Books/BooksGetAllController";

const booksRouter = Router();

booksRouter.get("/", new BooksGetAllControler().getAll);

booksRouter.post("/", new BooksCreateController().create);

export default booksRouter;
