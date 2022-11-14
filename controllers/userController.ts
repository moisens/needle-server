import mongoose from "mongoose";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import User, { UserInput, UserDocument } from "../models/Users.js";
import checkPermission from "../utils/checkPermissions.js";
import createTokenuser from "../utils/createTokenUser.js"; 
import { attachCookiesToResponse } from "../utils/jwt.js";




interface IUpdateUser extends UserDocument {
  user: UserInput
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

const updateUser = async (req: Request<UserDocument>, res: Response) => {
  const { name, lastname, email }: UserDocument = req.body;
  if (!name || !lastname || !email) throw new BadRequestError("Invalid credentials!")
  const user = await User.findOneAndUpdate({ _id: req.params.userId }, { name, lastname, email }, {
    new: true,
    runValidators: true,
  })!

  //const tokenUser = createTokenuser(user);
  //attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ user })
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
