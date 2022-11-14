interface IBaseCreateRepository<T> {
    create(data: T): Promise<T>;
}

export default IBaseCreateRepository;
