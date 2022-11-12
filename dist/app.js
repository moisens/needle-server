import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
const app = express(); //No need to type it but if we want to be explicit, we can
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js"; // /!\Why this behaviour?????
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.get('/api/v1', (req, res) => {
    console.log(req.cookies);
    res.send("needle Api!!!!");
});
app.use("/api/v1/auth", authRouter.router);
app.use("/api/v1/users", userRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`✅ app started on port ${port}✨`));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`❌ ${error}💥`);
        }
    }
};
start();
