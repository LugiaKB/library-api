import { Book } from "@/shared/entities";
import { IBaseCreateService } from "../Base/interfaces";

class BooksCreateService implements IBaseCreateService<Book> {
    public async create(data: Book): Promise<Book> {
        const book = new Book({ ...data, rented: false });

        return book;
    }
}

export default BooksCreateService;
