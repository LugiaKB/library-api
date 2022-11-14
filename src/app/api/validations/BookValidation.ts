import { celebrate, Joi, Segments } from "celebrate";

export const BookUpdateValidationObject = {
    title: Joi.string(),
    genres: Joi.array().items(Joi.string()),
    author: Joi.string(),
    published: Joi.number().integer(),
};

export const BookCreateValidationObject = {
    title: BookUpdateValidationObject.title.required(),
    genres: BookUpdateValidationObject.genres.optional(),
    author: BookUpdateValidationObject.author.required(),
    published: Joi.number().required(),
};

export const BookUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(BookUpdateValidationObject),
});

export const BookCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(BookCreateValidationObject),
});
