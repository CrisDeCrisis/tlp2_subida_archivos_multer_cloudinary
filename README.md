# Práctica subida de archivos a la nube

## Contexto:

Una tienda de productos necesita un servidor básico que permita a los empleados
agregar nuevos productos y adjuntar una imagen que se guardará en el servidor. El
sistema no utiliza una base de datos, los productos se guardarán temporalmente en
memoria dentro de un array de objetos. Al agregar un producto, se deberá retornar el
producto creado con la URL de la imagen adjunta.

**_Clonar este repositorio_**

Iniciar el servidor:

```bash
cd multer_cloudinary
npm install
npm run dev
```

### Decisiones tomadas:

- Se implemento la libreria de Multer para el manejo de los archivos subidos al servidor.
- Adicionalmente se anexo a Cloudinary para subir los archivos a la nube como medida de seguridad.
- Dichos archivos se almacenan dentro del servidor en una carpeta temporal, en caso de
  buscar disminuir la carga del servidor, se podriam borrar estos archivos luego de ser subidos a Cloudinary.
- Se devuelve la secureUrl que nos probée Cloudinary, para mayor seguridad en el protocolo.
- Tanto Multer como Cloudinary se utilizan de manera independiente en archivos separados, con esto
  lo que se busca es, permitir al proyecto escalar o migrar a otras tecnologias si asi lo decide el cliente.
- Se implementarion validaciones de campos con Express-validator, para verificar los datos enviados al controlador.
