// routes/admin.routes.js
import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/product", protect, adminOnly, createProduct);

export default router;
