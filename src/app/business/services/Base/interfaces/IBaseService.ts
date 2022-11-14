import IBaseCreateService from "./IBaseCreateService";
import IBaseDeleteByIdService from "./IBaseDeleteByIdService";
import IBaseGetAllService from "./IBaseGetAllService";
import IBaseGetByIdService from "./IBaseGetByIdService";
import IBaseUpdateByIdService from "./IBaseUpdateByIdService";

interface IBaseService<T>
    extends IBaseCreateService<T>,
        IBaseGetAllService<T>,
        IBaseGetByIdService<T>,
        IBaseUpdateByIdService<T>,
        IBaseDeleteByIdService {}

export default IBaseService;
