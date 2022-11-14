import BaseCreateRepository from "./BaseCreateRepository";
import { IBaseRepository } from "./interfaces";

class BaseRepository<T> extends BaseCreateRepository<T> implements IBaseRepository<T> {}

export default BaseRepository;
