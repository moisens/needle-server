import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";


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
  id: String;
  userId: String;
  comparePassword(passwordToCompare: string): Promise<Boolean>;
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
    required: [true, "Provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valide email",
      unique: true,
    },
    
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
}, {timestamps: true});


UserSchema.pre("save", async function() {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  const user = this as UserDocument;
  user.password = await bcrypt.hash(user.password, salt);

})

UserSchema.methods.comparePassword = async function(passwordToCompare: string): Promise<boolean> {
  const user = this as UserDocument;
  const isMatch = await bcrypt.compare(passwordToCompare, user.password);
  return isMatch;
}

const User = mongoose.model<UserDocument>("User",UserSchema)

export default User;

