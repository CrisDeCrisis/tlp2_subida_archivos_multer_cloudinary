import { products } from "../database/products.js";
import { uploadFile } from "../utils/cloudinary.utility.js";

export const productsService = {};

productsService.createProduct = async (product) => {
  try {
    const { name, description, price, productImg } = product;

    const uploadedImage = await uploadFile(productImg);
    if (!uploadedImage) {
      throw new Error("Image upload failed");
    }
    const newProduct = {
      id: products.length + 1,
      name,
      description,
      price,
      imageUrl: uploadedImage.secure_url,
    };
    products.push(newProduct);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
