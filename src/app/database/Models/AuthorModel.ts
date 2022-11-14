import { model, Schema } from "mongoose";
import { Author } from "@/shared/entities";

const authorSchema = new Schema<Author>({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    hometown: {
        type: String,
        required: true,
    },
});

const AuthorModel = model<Author>("Author", authorSchema);

export default AuthorModel;
