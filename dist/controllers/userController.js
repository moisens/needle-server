const createUser = async (req, res) => {
    //const user = await User.create(req.body);
    //res.status(StatusCodes.CREATED).json({ user });
    console.log("create user");
};
const getAllUsers = async (req, res) => {
    console.log("getting all users!");
};
const getSingleUser = async (req, res) => {
    console.log("getting single user!");
};
const updateUser = async (req, res) => {
    console.log("updating user!");
};
const deleteUser = async (req, res) => {
    console.log("delete user!");
};
export { createUser, getAllUsers, getSingleUser, updateUser, deleteUser };
