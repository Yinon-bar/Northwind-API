import express, { NextFunction, Request, Response } from "express";
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

export default {
  router,
};
