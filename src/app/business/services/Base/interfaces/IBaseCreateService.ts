interface IBaseCreateService<T> {
    create(data: T): Promise<T>;
}

export default IBaseCreateService;
