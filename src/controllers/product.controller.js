import { productsService } from "../services/product.service.js";


export const productsCtrl = {};

productsCtrl.createProduct = async (req, res) => {
    try {
        const product = req.body;
        const filePath = req.file.path;
        const createdProduct = await productsService.createProduct({ ...product, productImg: filePath });
        res.status(201).json({ message: 'Product successfully created!', createdProduct });
    } catch (error) {
        res.status(500).send(error);
    }
};