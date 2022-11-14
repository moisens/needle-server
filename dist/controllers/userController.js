import User from "../models/Users.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/index.js";
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: "user" }).select("-password");
    res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user)
        throw new NotFoundError(`There is no user with id: ${userId}`);
    //Add check permission function!!!!
    res.status(StatusCodes.OK).json({ user });
};
const updateUser = async (req, res) => {
    console.log("updating user!");
};
const updateUserPassword = async (req, res) => {
    console.log("updating user password!");
};
const deleteUser = async (req, res) => {
    console.log("delete user!");
};
export { getAllUsers, getSingleUser, updateUser, updateUserPassword, deleteUser };
