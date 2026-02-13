// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
