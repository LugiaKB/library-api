import Base from "./Base";

class Book extends Base {
    public title!: string;

    public genres!: string[];

    public author!: string;

    public published!: number;

    public rented?: boolean;
}

export default Book;
