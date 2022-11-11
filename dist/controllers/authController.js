import { StatusCodes } from "http-status-codes";
import User from "../models/Users.js";
import BadRequestError from "../errors/bad-request.js";
import createTokenuser from "../utils/createTokenUser.js";
import { attachCookiesToResponse } from "../utils/jwt.js";
const register = async (req, res) => {
    const { email, password, name, lastname } = req.body;
    const emailAllReadyExist = await User.findOne({ email });
    if (emailAllReadyExist)
        throw new BadRequestError("Email in use! Try an other one.");
    //The first user to register has the Admin role
    const isFirstRegistered = await User.countDocuments({}) === 0;
    const role = isFirstRegistered ? "admin" : "user";
    const user = await User.create({ name, lastname, email, password, role });
    const tokenUser = createTokenuser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const login = async (req, res) => {
};
export default {
    register,
    login
};
