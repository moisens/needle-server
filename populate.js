import dotenv from "dotenv";
dotenv.config();
import { readFile } from "fs/promises";
import connectDB from "./db/connect.js";
import Product from "./models/Products.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    const jsonProduct = JSON.parse(
      await readFile(new URL("./mock-products.json", import.meta.url))
    );
    await Product.create(jsonProduct);
    console.log(`✅Products created!`);
    process.exit(0);
  } catch (error) {
    console.log(`⚠️${error}`);
    process.exit(1);
  }
};
start();
