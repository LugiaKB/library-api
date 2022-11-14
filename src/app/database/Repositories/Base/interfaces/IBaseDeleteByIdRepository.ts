interface IBaseDeleteByIdRepository {
    deleteById(id: string): Promise<boolean>;
}

export default IBaseDeleteByIdRepository;
