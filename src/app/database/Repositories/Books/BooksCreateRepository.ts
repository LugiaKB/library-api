import { Book } from "@/shared/entities";
import { BookModel } from "../../Models";

class BooksCreateRepository {
    public async create(data: Book): Promise<Book> {
        const book = new BookModel(data);
        await book.save();

        return book;
    }
}

export default BooksCreateRepository;
