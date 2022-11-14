interface IBaseGetAllRepository<T> {
    getAll(): Promise<T[]>;
}

export default IBaseGetAllRepository;
