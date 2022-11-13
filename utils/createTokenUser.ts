import { UserDocument } from "../models/Users.js";
import mongoose from "mongoose";

const createTokenuser = (user: UserDocument) => {
  return {
    name: user.name,
    userId: new mongoose.Types.ObjectId(),
    role: user.role,
    email: user.email,
  };
};

export default createTokenuser;
