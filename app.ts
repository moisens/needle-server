import express, { Request, Response, Express } from "express";

const app: Express = express();//No need to type it but if we want to be explicit, we can

app.get('/', (req: Request, res: Response) => {
  res.send("needle backend!")
})
const PORT = 5000;
app.listen(PORT,() => console.log(`app started on port ${PORT}`));