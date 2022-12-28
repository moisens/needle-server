import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";

const app = express();

import morgan from "morgan";
import cookieParser from "cookie-parser"
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

import productRoutes from "./routes/productRouters.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))


app.get('/api/v1', (req, res) => {
  res.send("needle Api!!!!")
})

app.use("/api/v1/products", productRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port,() => console.log(`✅ app started on port ${port}✨`));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`❌ ${error}💥`);
    }
  }
}
start()

