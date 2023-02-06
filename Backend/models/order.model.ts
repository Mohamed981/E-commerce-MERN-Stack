import mongoose from "mongoose";

const Order = new mongoose.Schema(
  {
    items:{type:[String]},
    totalprice: { type: Number },
  },
  { collection: "order" }
);

const model = mongoose.model("Order", Order);

export default model;
