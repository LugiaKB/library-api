import { inject, injectable } from "tsyringe";
import { IBaseRepository } from "@/app/database/Repositories/Base/interfaces";
import { Book } from "@/shared/entities";
import { IBaseCreateService } from "../Base/interfaces";

@injectable()
class BooksCreateService implements IBaseCreateService<Book> {
    constructor(
        @inject("BookRepository")
        private readonly bookRepository: IBaseRepository<Book>
    ) {}

    public async create(data: Book): Promise<Book> {
        const book = new Book({ ...data, rented: false });

        return this.bookRepository.create(book);
    }
}

export default BooksCreateService;
