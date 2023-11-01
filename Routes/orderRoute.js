import express from 'express';
import { addOrder, getOrder } from '../Controllers/orderController.js';

const router = express.Router();

router.post("/order/:id", addOrder);
router.get("/order", getOrder);



export default router;