import { model, Schema } from "mongoose";
import Librarian from "@/shared/entities/Librarian";

const librarianSchema = new Schema<Librarian>({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const LibrarianModel = model<Librarian>("Librarian", librarianSchema);

export default LibrarianModel;
