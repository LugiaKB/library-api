import { v4 } from "uuid";

class Base {
    public readonly _id!: string;

    constructor(props: Omit<Base, "_id">) {
        this._id = v4();

        Object.assign(this, props);
    }
}

export default Base;
