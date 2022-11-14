interface IBaseUpdateByIdService<T> {
    updateById(id: string, data: T): Promise<T>;
}

export default IBaseUpdateByIdService;
