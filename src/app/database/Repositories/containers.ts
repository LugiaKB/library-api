import { container, delay } from "tsyringe";
import { Book } from "@/shared/entities";
import { IBaseRepository } from "./Base/interfaces";
import { BookRepository } from "./Book";

container.registerSingleton<IBaseRepository<Book>>(
    "BookRepository",
    delay(() => BookRepository)
);
