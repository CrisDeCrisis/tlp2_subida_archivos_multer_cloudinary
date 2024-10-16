import { products } from '../database/products.js';
import { uploadFile } from '../utils/cloudinary.utility.js';

export const productsService = {};

productsService.createProduct = async (product) => {
    try {
        const { name, description, price } = product.body;
        const filePath = product.file.path;
        const uploadedImage = await uploadFile(filePath);
        const newProduct = {
            id: products.length + 1,
            name,
            description,
            price,
            imageUrl: uploadedImage.secure_url
        };
        products.push(newProduct);
        return newProduct;
    } catch (error) {
        throw error;
    }
};