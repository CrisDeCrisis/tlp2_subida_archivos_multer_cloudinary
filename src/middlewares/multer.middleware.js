import { fileFilter, limits, storage } from "../configs/upload.config.js";

export const upload = multer({
    storage,
    fileFilter,
    limits
});