import { celebrate, Joi, Segments } from "celebrate";

export const LibrarianValidationObject = {
    username: Joi.string().required(),
    password: Joi.string().required(),
};

export const LibrarianValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(LibrarianValidationObject),
});
