import { Request, Response } from "express";
import Product from "../models/product.model";

const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.send(products);
};

const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
};
export { getProducts, getProduct };
