import { Model } from "mongoose";
import { IBaseCreateRepository } from "./interfaces";

class BaseCreateRepository<T> implements IBaseCreateRepository<T> {
    constructor(protected model: Model<T>) {}

    public async create(data: T): Promise<T> {
        const resource = new this.model(data);
        await resource.save();

        return resource;
    }
}

export default BaseCreateRepository;
