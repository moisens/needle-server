import mongoose from "mongoose";

export interface UserInput {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export interface UserId extends UserInput {
  userId: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  user: string;
  comparePassword(passwordToCompare: string): Promise<Boolean>;
}
