import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
const app = express(); //No need to type it but if we want to be explicit, we can
import connectDB from "./db/connect.js"; // /!\Why this behaviour?????
app.get('/', (req, res) => {
    res.send("needle Api");
});
const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`app started on port ${port}`));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};
start();
