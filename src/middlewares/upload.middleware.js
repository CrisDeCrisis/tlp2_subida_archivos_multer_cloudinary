import multer from "multer";
import { upload } from "../utils/multer.utility.js";
import fs from 'node:fs';

const tempDir = 'temp';
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

export const uploadMiddleware = (fieldName) => (req, res, next) => {
  const uploadSingle = upload.single(fieldName);

  uploadSingle(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        message: err.message,
      });
    } else if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No se ha seleccionado un archivo",
      });
    }
    req.body = Object.assign({}, req.body);
    req.body[fieldName] = req.file.filename;
    next();
  });
};
