import Base from "./Base";

class Rental extends Base {
    public librarian!: string;

    public clientEmail!: string;

    public rentalDate!: Date;

    public rentalDue!: Date;

    public book!: string;
}

export default Rental;
