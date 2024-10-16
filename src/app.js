import express from "express";
import morgan from "morgan";
import cors from "cors";
import { productsRouter } from "./router/product.routes.js";
import { PORT } from "./configs/env.config.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT} 🚀`);
});