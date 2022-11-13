import UnauthorizedError from "../errors/unauthorized";
const checkPermission = (requestUser, ressourceUserId) => {
    if (requestUser.role === "admin")
        return;
    if (requestUser.userId === ressourceUserId.toString())
        return;
    throw new UnauthorizedError("⛔️ You are not authorized to access this route!");
};
export default checkPermission;
