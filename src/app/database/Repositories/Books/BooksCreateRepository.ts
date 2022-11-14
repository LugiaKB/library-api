import Client from "@/shared/entities/Client";
import { ClientModel } from "../../Models";

class BooksCreateRepository {
    public async create(data: Client): Promise<Client> {
        const client = new ClientModel(data);
        await client.save();

        return client;
    }
}

export default BooksCreateRepository;
