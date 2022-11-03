import { Request, Response } from "express";



const notFound = (req: Request, res: Response) =>
  res.status(404).send(`Sorry, this route doesn't exist`);
export default notFound;