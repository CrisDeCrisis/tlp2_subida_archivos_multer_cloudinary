import { uploadFile } from '../utils/cloudinary.utility.js';

export const productsService = {};

productsService.createProduct = async (product) => {
    try {
        const { name, description, price } = product.body;
        const filePath = product.file.path;
        const uploadedImage = await uploadFile(filePath);
        return {
            name,
            description,
            price,
            imageUrl: uploadedImage.secure_url
        };
    } catch (error) {
        throw error;
    }
};