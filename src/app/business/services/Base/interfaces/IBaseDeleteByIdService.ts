interface IBaseDeleteByIdService {
    deleteById(id: string): Promise<boolean>;
}

export default IBaseDeleteByIdService;
