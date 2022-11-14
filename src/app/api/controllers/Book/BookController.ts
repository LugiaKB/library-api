import { inject, injectable } from "tsyringe";
import { IBaseService } from "@/app/business/services/Base/interfaces";
import { Book } from "@/shared/entities";
import { BaseController } from "../Base";

@injectable()
class BookController extends BaseController<Book> {
    constructor(
        @inject("BookService")
        bookService: IBaseService<Book>
    ) {
        super(bookService);
    }
}

export default BookController;
