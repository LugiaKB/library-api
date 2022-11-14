import { container, delay } from "tsyringe";
import { Book } from "@/shared/entities";
import { IBaseService } from "./Base/interfaces";
import { BookService } from "./Book";

container.registerSingleton<IBaseService<Book>>(
    "BookService",
    delay(() => BookService)
);
