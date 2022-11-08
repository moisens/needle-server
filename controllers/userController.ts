import User from "../models/Users.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index";
import { Request, Response } from "express";


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
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
}
