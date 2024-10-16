import { Router } from 'express';
import { productsCtrl } from '../controllers/product.controller.js';
import { uploadMiddleware } from '../middlewares/upload.middleware.js';


export const productsRouter = Router();

productsRouter.post('/', uploadMiddleware('productImg'), productsCtrl.createProduct);