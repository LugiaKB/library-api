import { celebrate, Joi, Segments } from "celebrate";

export const ClientUpdateValidationObject = {
    name: Joi.string(),
    email: Joi.string(),
    age: Joi.number().integer(),
};

export const ClientCreateValidationObject = {
    name: ClientUpdateValidationObject.name.required(),
    email: ClientUpdateValidationObject.email.required(),
    age: ClientUpdateValidationObject.age.required(),
};

export const ClientUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(ClientUpdateValidationObject),
});

export const ClientCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(ClientCreateValidationObject),
});
