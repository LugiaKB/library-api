import BooksCreateRepository from "@/app/database/Repositories/Books/BooksCreateRepository";
import Client from "@/shared/entities/Client";

class BooksCreateService {
    public async create(data: Client): Promise<Client> {
        const repository = new BooksCreateRepository();

        const client = new Client(data);

        return repository.create(client);
    }
}

export default BooksCreateService;
