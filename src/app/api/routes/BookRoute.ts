import { Router } from "express";
import { container } from "tsyringe";
import { BookController } from "../controllers";
import { BookCreateValidation } from "../validations";

const booksRouter = Router();

const bookController = container.resolve(BookController);

booksRouter.get("/", (req, res) => bookController.getAll(req, res));

booksRouter.post("/", BookCreateValidation, (req, res) => bookController.create(req, res));

export default booksRouter;
