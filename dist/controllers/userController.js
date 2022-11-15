import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import User from "../models/Users.js";
import createTokenuser from "../utils/createTokenUser.js";
import { attachCookiesToResponse } from "../utils/jwt.js";
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
    const { name, lastname, email } = req.body;
    const user = await User.findOneAndUpdate({ _id: req.user.userId });
    if (!name || !lastname || !email)
        throw new BadRequestError("Please provide all values!");
    const tokenUser = createTokenuser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.OK).json({ user: tokenUser });
};
const updateUserPassword = async (req, res) => {
    console.log("updating user password!");
};
const deleteUser = async (req, res) => {
    console.log("delete user!");
};
export { getAllUsers, getSingleUser, updateUser, updateUserPassword, deleteUser };
