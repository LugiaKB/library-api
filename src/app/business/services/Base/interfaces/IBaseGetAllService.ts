interface IBaseGetAllService<T> {
    getAll(): Promise<T[]>;
}

export default IBaseGetAllService;
