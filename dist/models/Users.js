import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
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
        required: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a user password"],
        minLength: [6, "User password must have minimum 6 characters"]
    }
}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
export default User;
