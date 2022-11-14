import { Router, Request, Response } from "express";
import booksRouter from "./BookRoute";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({ message: "Team Culture" });
});

router.use("/books", booksRouter);

export default router;
