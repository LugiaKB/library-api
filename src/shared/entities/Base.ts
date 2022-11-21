import { v4 } from "uuid";

class Base<Entity extends Base<Entity>> {
    public readonly _id?: string;

    constructor(props: Omit<Entity, "_id">, _id?: string) {
        this._id = _id || v4();

        Object.assign(this, props);
    }
}

export default Base;
