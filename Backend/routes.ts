import * as productController from "./controllers/product.controller";
import * as orderController from "./controllers/order.controller";
import express from "express";

const router = express.Router();

router.get("/products", productController.getProducts);

router.post("/payment", orderController.getStripeClient);

router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrders);

export default router;