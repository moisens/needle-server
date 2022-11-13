import User from "../models/Users.js";
import { StatusCodes } from "http-status-codes";
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: "user" }).select("-password");
    res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
    console.log("getting single user");
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
