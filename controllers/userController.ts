import User from "../models/Users.js";
import checkPermission from "../utils/checkPermissions.js";
import { UserDocument } from "../models/Users";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import { Request, Response } from "express";


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
  console.log("updating user!");
  
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
