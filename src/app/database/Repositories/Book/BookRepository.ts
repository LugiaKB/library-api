import { injectable } from "tsyringe";
import { Book } from "@/shared/entities";
import { BookModel } from "../../models";
import { BaseRepository } from "../Base";
import { IBaseRepository } from "../Base/interfaces";

@injectable()
class BookRepository extends BaseRepository<Book> implements IBaseRepository<Book> {
    constructor() {
        super(BookModel);
    }
}

export default BookRepository;
