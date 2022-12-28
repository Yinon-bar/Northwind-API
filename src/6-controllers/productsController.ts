import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../4-models/productModel";
import productLogic from "../5-logic/productLogic";

const router = express.Router();

router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productLogic.getAllProducts();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  }
);

router.get(
  "/products/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = +req.params.id;
      const product = await productLogic.getOneProduct(id);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
);

router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = new ProductModel(req.body);
      const newProduct = await productLogic.addNewProduct(product);
      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
);

export default {
  router,
};
