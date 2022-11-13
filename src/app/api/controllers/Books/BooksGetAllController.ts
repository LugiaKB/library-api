import { Request, Response } from "express";

class BooksGetAllControler {
    public async getAll(req: Request, res: Response) {
        res.send(req.body);
    }
}

export default BooksGetAllControler;
