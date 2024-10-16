export const productsCtrl = {};

// Estructura de un producto
// {
//     "id": "string",
//     "name": "string",
//     "description": "string",
//     "price": "number",
//     "imageUrl": "string"
// }

productsCtrl.createProduct = async (req, res) => {
    console.log(req.file);

    res.status(201).json(req.body);
};