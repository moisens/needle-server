import mongoose from "mongoose";


export interface UserInput {
  name: string,
  lastname: string,
  email: string,
  password: string,
  role: string
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  //comparePassword(candidatePassword: string): Promise<Boolean>;
}

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Please provide a user name"],
    trim: true,
    maxLength: [50, "User name can't be more than 50 characters"],
    minLength: [2, "User name must have minimum two characters"]
  },
  lastname: {
    type: String,
    required: [true, "Please provide a user last name"],
    trim: true,
    maxLength: [50, "User last name can't be more than 50 characters"],
    minLength: [2, "User last name must have minimum two characters"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Provide an email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a user password"],
    minLength: [6, "User password must have minimum 6 characters"]
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
}, {timestamps: true})

const User = mongoose.model<UserDocument>("User",UserSchema)

export default User;

