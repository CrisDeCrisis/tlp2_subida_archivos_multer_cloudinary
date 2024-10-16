import { body } from 'express-validator';

export const createProductValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 50 }).withMessage('Name must be between 3 and 50 characters'),
    body('description')
        .isString().withMessage('Description must be a string')
        .isLength({ min: 3, max: 250 }).withMessage('Description must be between 3 and 250 characters'),
    body('price')
        .notEmpty().withMessage('Price is required')
        .isNumeric().withMessage('Price must be a number'),
];