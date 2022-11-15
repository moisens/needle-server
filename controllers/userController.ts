import mongoose from "mongoose";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import User, { UserInput, UserDocument } from "../models/Users.js";
import checkPermission from "../utils/checkPermissions.js";
import createTokenuser from "../utils/createTokenUser.js"; 
import { attachCookiesToResponse } from "../utils/jwt.js";

export interface UpdateUser {
  userId: mongoose.Types.ObjectId;
  name: string;
  lastname: string;
  email: string;
}

interface IUpdateuser extends UserInput {
  user: {
    userId: mongoose.Types.ObjectId;
  }
}


const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({ role: "user" }).select("-password")
  res.status(StatusCodes.OK).json({users})
  
}

const getSingleUser = async (req: Request<UserDocument>, res: Response) => {
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId }).select("-password");
  if (!user) throw new NotFoundError(`There is no user with id: ${userId}`)
  //Add check permission function!!!!
  res.status(StatusCodes.OK).json({ user })
}

const updateUser = async (req: Request<IUpdateuser>, res: Response) => {
  const { name, lastname, email }: IUpdateuser = req.body;
  const user = await User.findOneAndUpdate({ _id: req.user.userId })!
  if (!name || !lastname || !email) throw new BadRequestError("Please provide all values!")
  const tokenUser = createTokenuser(user!);
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ user: tokenUser })
}


const updateUserPassword = async (req: Request, res: Response) => {
  console.log("updating user password!");
  
}

const deleteUser = async (req: Request, res: Response) => {
  console.log("delete user!");
  
}



export {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser
}
