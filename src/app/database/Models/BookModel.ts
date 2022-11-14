import { model, Schema } from "mongoose";
import { Book } from "@/shared/entities";

const bookSchema = new Schema<Book>({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    genres: {
        type: [String],
        required: false,
    },
    author: {
        type: String,
        required: true,
        index: true,
    },
    published: {
        type: Number,
        required: true,
    },
    rented: {
        type: Boolean,
        required: false,
    },
});

const BookModel = model<Book>("Book", bookSchema);

export default BookModel;
