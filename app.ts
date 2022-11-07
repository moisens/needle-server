import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express, { Request, Response, Express } from "express";


const app: Express = express();//No need to type it but if we want to be explicit, we can

import connectDB from "./db/connect.js"// /!\Why this behaviour?????
import userRouter from "./routes/usersRoutes"
import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";

app.get('/', (req: Request, res: Response) => {
  res.send("needle Api!!!!")
})

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
      console.log(`❌ ${error}`);
    }
  }
}
start()

