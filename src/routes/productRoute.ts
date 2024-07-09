import { Router } from 'express';
import {
  getPaginatedProducts,
  addProduct,
} from '../controllers/productController';

const router = Router();

router.get('/products', getPaginatedProducts);
router.post('/products', addProduct);

export default router;
