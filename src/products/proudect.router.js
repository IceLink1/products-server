import { Router } from "express";
import Product from "../models/Product.model.js";
import ProductController from "./product.controller.js";

const productRouter = Router();

productRouter.get("/", ProductController.getAll);
productRouter.post("/", ProductController.create);

export default productRouter;
