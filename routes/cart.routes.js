import express from "express";
import {
  addToCart,
  updateCartItem,
  removeFromCart,
  getCart,
  clearCart
} from "../controllers/cart.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add", protect, addToCart);
router.put("/update", protect, updateCartItem);
router.delete("/remove/:productId", protect, removeFromCart);
router.get("/", protect, getCart);
router.delete("/clear", protect, clearCart);

export default router;
