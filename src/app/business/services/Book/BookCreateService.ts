import { BookRepository } from "@/app/database/Repositories/Book";
import { Book } from "@/shared/entities";

class BooksCreateService {
    public async create(data: Book): Promise<Book> {
        const repository = new BookRepository();

        const book = new Book({ ...data, rented: false });

        return repository.create(book);
    }
}

export default BooksCreateService;
