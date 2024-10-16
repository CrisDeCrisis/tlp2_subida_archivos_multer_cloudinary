import { Router } from 'express';
import { productsCtrl } from '../controllers/product.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

export const productsRouter = Router();

productsRouter.post('/', upload.single(), productsCtrl.createProduct);