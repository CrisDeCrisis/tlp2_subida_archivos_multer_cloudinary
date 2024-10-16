import multer from "multer";
import { upload } from "./multer.middleware.js";

export const uploadMiddleware = (fieldName) => (req, res, next) => {

    const uploadSingle = upload.single(fieldName)

    uploadSingle(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                message: err.message
            });
        } else if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: 'No se ha seleccionado un archivo'
            });
        }

        req.body[fieldName] = req.file.filename;

        next();
    });
};