import express from 'express';
import { addCart } from '../Controllers/cartController.js';

const router = express.Router();

router.post("/cart", addCart)
//router.get("/cart/:id", delCart)


export default router;