import { productsService } from "../services/product.service.js";


export const productsCtrl = {};

productsCtrl.createProduct = async (req, res) => {
    try {
        const product = req;
        const createdProduct = await productsService.createProduct(product);
        res.status(201).json({ message: 'Product successfully created!', createdProduct });
    } catch (error) {
        res.status(500).send(error);
    }
};