import { Request, Response } from "express";
import Order from "../models/order.model";
import { config } from "dotenv";

config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const getStripeClient = async (req: Request, res: Response) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount: req.body.totalprice * 100,
      currency: "usd",
    });
    res.send(payment.client_secret);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
const createOrder = async (req: Request, res: Response) => {
  await Order.create({
    items: req.body.items,
    totalprice: req.body.totalprice,
  });
  res.send();
};
const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({});
  res.send(orders);
};
export { createOrder, getStripeClient, getOrders };
