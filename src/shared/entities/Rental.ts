import Base from "./Base";

class Rental extends Base {
    public client!: string;

    public rentalDate!: Date;

    public rentalDue!: Date;

    public book!: string;
}

export default Rental;
