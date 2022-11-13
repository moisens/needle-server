import mongoose from "mongoose";
const createTokenuser = (user) => {
    return {
        name: user.name,
        userId: new mongoose.Types.ObjectId(),
        role: user.role,
        email: user.email,
    };
};
export default createTokenuser;
