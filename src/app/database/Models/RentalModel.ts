import { model, Schema } from "mongoose";
import { Rental } from "@/shared/entities";

const rentalSchema = new Schema<Rental>({
    _id: {
        type: String,
        required: true,
    },
    librarian: {
        type: String,
        required: true,
    },
    clientEmail: {
        type: String,
        required: true,
    },
    book: {
        type: String,
        required: true,
    },
    rentalDate: {
        type: Date,
        required: true,
    },
    rentalDue: {
        type: Date,
        required: true,
    },
});

const RentalModel = model<Rental>("Rental", rentalSchema);

export default RentalModel;
