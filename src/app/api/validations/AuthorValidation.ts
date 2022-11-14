import { celebrate, Joi, Segments } from "celebrate";

export const AuthorUpdateValidationObject = {
    name: Joi.string(),
    hometown: Joi.string(),
};

export const AuthorCreateValidationObject = {
    name: AuthorUpdateValidationObject.name.required(),
    hometown: AuthorUpdateValidationObject.hometown.required(),
};

export const AuthorUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(AuthorUpdateValidationObject),
});

export const AuthorCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(AuthorCreateValidationObject),
});
