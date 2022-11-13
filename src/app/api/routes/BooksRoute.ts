import { Router } from "express";
import BooksGetAllControler from "../controllers/Books/BooksGetAllController";

const booksRouter = Router();

booksRouter.get("/", new BooksGetAllControler().getAll);

export default booksRouter;
