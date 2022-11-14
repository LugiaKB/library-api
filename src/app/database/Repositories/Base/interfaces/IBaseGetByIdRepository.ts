interface IBaseGetByIdRepository<T> {
    getById(id: string): Promise<T>;
}

export default IBaseGetByIdRepository;
