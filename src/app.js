import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "node:path";
import { productsRouter } from "./router/product.routes.js";
import { PORT } from "./configs/env.config.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(), "temp")));

// routes
app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT} 🚀`);
});