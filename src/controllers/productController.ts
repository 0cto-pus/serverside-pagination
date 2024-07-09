import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export const getPaginatedProducts = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await productService.getProducts(page, limit);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
