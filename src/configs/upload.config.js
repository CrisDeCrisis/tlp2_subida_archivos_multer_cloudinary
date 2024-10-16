import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';

// Configuracion de storage
export const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, path.join(__dirname, '/temp/'));
    },
    filename: (_req, file, cb) => {
        const fileName =
            crypto.randomUUID().toString() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

// Limites de archivo
const maxMB = 25;
export const limits = {
    fileSize: 1024 * 1024 * maxMB
};

// Filtro de archivos
export const fileFilter = (_req, file, cb) => {
    const fileTypes = /jpg|png/;
    const allowedExname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (allowedExname) {
        return cb(new Error("Solo se permiten archivos de tipo jpg o png"));
    }

    return cb(null, true);
};