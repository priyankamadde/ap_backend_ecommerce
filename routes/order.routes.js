import express from "express";
import {
  checkout,
  getMyOrders,
  getAllOrders
} from "../controllers/order.controller.js";

import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/checkout", protect, checkout);
router.get("/my-orders", protect, getMyOrders);

// admin
router.get("/", protect, admin, getAllOrders);

export default router;
