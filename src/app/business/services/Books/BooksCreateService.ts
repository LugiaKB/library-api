import BooksCreateRepository from "@/app/database/Repositories/Books/BooksCreateRepository";
import { Book } from "@/shared/entities";

class BooksCreateService {
    public async create(data: Book): Promise<Book> {
        const repository = new BooksCreateRepository();

        const book = new Book(data);

        return repository.create(book);
    }
}

export default BooksCreateService;
