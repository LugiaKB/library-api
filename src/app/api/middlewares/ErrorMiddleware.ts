import { NextFunction, Request, Response } from "express";
import { isCelebrateError } from "celebrate";

import { BaseError, InternalServerError, ValidationError } from "@/shared/errors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseError) {
        return res.status(err.code).json(err.toPlainObject());
    }

    if (isCelebrateError(err)) {
        let message = "";

        // eslint-disable-next-line no-restricted-syntax
        for (const [, joiError] of err.details.entries()) {
            message = joiError.message;
        }

        const celebrateError = new ValidationError(err.message, message);
        return res.status(400).json(celebrateError.toPlainObject());
    }

    const internalError = new InternalServerError(err.name, err.message, err.stack as string);

    console.error(err);

    return res.status(500).json(internalError.toPlainObject());
};

export default ErrorMiddleware;
