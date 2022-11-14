import { injectable } from "tsyringe";
import { Book } from "@/shared/entities";
import { IBaseService } from "../Base/interfaces";
import BooksCreateService from "./BookCreateService";

@injectable()
class BookService extends BooksCreateService implements IBaseService<Book> {}

export default BookService;
