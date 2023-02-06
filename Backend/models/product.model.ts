import mongoose from "mongoose";

const Product = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    path: { type: String },
  },
  { collection: "product" }
);

const model = mongoose.model("Product", Product);

export default model;
