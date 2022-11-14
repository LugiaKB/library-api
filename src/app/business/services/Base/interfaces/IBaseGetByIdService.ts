interface IBaseGetByIdService<T> {
    getById(id: string): Promise<T>;
}

export default IBaseGetByIdService;
