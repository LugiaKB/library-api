import { Request, Response } from "express";
import BooksCreateService from "@/app/business/services/Books/BooksCreateService";

class BooksCreateController {
    public async create(req: Request, res: Response): Promise<void> {
        const service = new BooksCreateService();

        res.send(await service.create(req.body));
    }
}

export default BooksCreateController;
