import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IBaseService } from "@/app/business/services/Base/interfaces";
import { Book } from "@/shared/entities";

@injectable()
class BooksCreateController {
    constructor(
        @inject("BookService")
        private readonly bookService: IBaseService<Book>
    ) {}

    public async create(req: Request, res: Response): Promise<void> {
        res.send(await this.bookService.create(req.body));
    }
}

export default BooksCreateController;
