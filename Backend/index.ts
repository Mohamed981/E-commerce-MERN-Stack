import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

const connectDB = require("./database");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

async function initialize() {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log("Server started on", process.env.PORT);
  });
}

initialize();
