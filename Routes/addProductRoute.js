import express from 'express';
import { addProduct, delProduct, getProduct, updateProduct } from '../Controllers/addProductController.js';

const router = express.Router();

router.post("/product", addProduct)
router.post("/product", getProduct)
router.post("/product", delProduct)
router.post("/product", updateProduct);

export default router;