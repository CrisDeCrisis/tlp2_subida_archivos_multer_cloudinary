import { Router } from 'express';
import { productsCtrl } from '../controllers/product.controller.js';
import { uploadMiddleware } from '../middlewares/upload.middleware.js';
import { createProductValidation } from '../validations/product.validation.js';
import { applyValidation } from '../middlewares/validation.middleware.js';


export const productsRouter = Router();

productsRouter.post('/',
    uploadMiddleware('productImg'),
    createProductValidation,
    applyValidation,
    productsCtrl.createProduct);