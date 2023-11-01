import express from 'express';
import { addCart, delCart } from '../Controllers/cartController.js';

const router = express.Router();

router.post("/cart", addCart)
router.delete("/cart/:id", delCart)


export default router;