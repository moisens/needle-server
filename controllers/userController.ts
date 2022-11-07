import User from "../models/Users";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index";
import { Request, Response } from "express";


const createUser = async (req: Request, res: Response) => {
  //const user = await User.create(req.body);
  //res.status(StatusCodes.CREATED).json({ user });
  console.log("create user");
  

}

const getAllUsers = async (req: Request, res: Response) => {
  console.log("getting all users!");
  
}

const getSingleUser = async (req: Request, res: Response) => {
  console.log("getting single user!");
  
}

const updateUser = async (req: Request, res: Response) => {
  console.log("updating user!");
  
}

const deleteUser = async (req: Request, res: Response) => {
  console.log("delete user!");
  
}



export {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
}
