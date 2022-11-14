import { injectable } from "tsyringe";
import BaseCreateController from "./BaseCreateController";

@injectable()
class BaseController<T> extends BaseCreateController<T> {}

export default BaseController;
