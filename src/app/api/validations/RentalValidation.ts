import { celebrate, Joi, Segments } from "celebrate";

export const RentalUpdateValidationObject = {
    librarian: Joi.string(),
    book: Joi.string(),
    clientEmail: Joi.string(),
    rentalDate: Joi.date(),
    rentalDue: Joi.date(),
};

export const RentalCreateValidationObject = {
    librarian: RentalUpdateValidationObject.librarian.required(),
    book: RentalUpdateValidationObject.librarian.required(),
    clientEmail: RentalUpdateValidationObject.clientEmail.required(),
    rentalDate: RentalUpdateValidationObject.rentalDate.required(),
    rentalDue: RentalUpdateValidationObject.rentalDue.required(),
};

export const RentalUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(RentalUpdateValidationObject),
});

export const RentalCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys(RentalCreateValidationObject),
});
