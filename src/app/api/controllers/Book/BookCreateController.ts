import { injectable } from "tsyringe";
import { Book } from "@/shared/entities";
import { BaseCreateController } from "../Base";
import BooksCreateService from "@/app/business/services/Book/BookCreateService";

@injectable()
class BookCreateController extends BaseCreateController<Book> {
    constructor(bookService = new BooksCreateService()) {
        super(bookService);
    }
}

export default BookCreateController;
