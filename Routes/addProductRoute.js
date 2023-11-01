import express from 'express';
import { addProduct, delProduct, getProduct, updateProduct } from '../Controllers/addProductController.js';

const router = express.Router();

router.post("/product", addProduct)
router.get("/product/:id", getProduct)
router.delete("/product/:id", delProduct)
router.put("/product/:id", updateProduct);

export default router;