interface IBaseUpdateByIdRepository<T> {
    updateById(id: string, data: T): Promise<T>;
}

export default IBaseUpdateByIdRepository;
