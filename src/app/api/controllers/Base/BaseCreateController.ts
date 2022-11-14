import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { IBaseService } from "@/app/business/services/Base/interfaces";

@injectable()
class BaseCreateController<T> {
    constructor(private readonly service: IBaseService<T>) {}

    public async create(req: Request, res: Response): Promise<void> {
        res.send(await this.service.create(req.body));
    }
}

export default BaseCreateController;
