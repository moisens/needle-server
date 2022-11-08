import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/Users.js";
import { UserInput } from "../models/Users.js"
import { BadRequestError } from "../errors/index.js"


const register = async (req: Request<UserInput>, res: Response) => {
  const { email, password, name, lastname } = req.body;

  const emailAllReadyExist = await User.findOne({ email })
  if (emailAllReadyExist) throw new BadRequestError("Email in use! Try an other one.")

  //The first user to register has the Admin role
  const isFirstRegistered = await User.countDocuments({}) === 0
  const role = isFirstRegistered ? "admin" : "user";

  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user });
}



export default {
  register
}
