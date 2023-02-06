import { readFileSync } from "fs";
import Products from "./models/product.model";

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URI);


    //Uncomment to add data to products collection
    // let products = JSON.parse(readFileSync('./products.json').toString());
    // Products.create(products);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
