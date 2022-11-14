import { model, Schema } from "mongoose";
import Client from "@/shared/entities/Client";

const clientSchema = new Schema<Client>({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
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

const ClientModel = model<Client>("Client", clientSchema);

export default ClientModel;
