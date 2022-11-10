import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express, { Request, Response, Express } from "express";


const app: Express = express();//No need to type it but if we want to be explicit, we can

import morgan from "morgan"
import connectDB from "./db/connect.js";// /!\Why this behaviour?????
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

app.get('/', (req: Request, res: Response) => {
  res.send("needle Api!!!!")
})

app.use(morgan("tiny"))
app.use(express.json())


app.use("/api/v1/auth", authRouter.router);
app.use("/api/v1/users", userRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port: number = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(port,() => console.log(`✅ app started on port ${port}✨`));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`❌ ${error}💥`);
    }
  }
}
start()

