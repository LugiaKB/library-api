import BaseError from "./BaseError";

class InternalServerError extends BaseError {
    constructor(name: string, description: string, stack: string) {
        super(500, "InternalServerError", "Internal Server Error", description, name, stack);
    }
}

export default InternalServerError;
