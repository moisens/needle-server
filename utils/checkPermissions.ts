import UnauthorizedError from "../errors/unauthorized";
import { UserDocument } from "../models/Users.js";

interface ICheckPermission extends UserDocument {
  userId: string;
}

const checkPermission = (
  requestUser: ICheckPermission,
  ressourceUserId: ICheckPermission
) => {
  if (requestUser.role === "admin") return;
  if (requestUser.userId === ressourceUserId.toString()) return;
  throw new UnauthorizedError("⛔️ You are not authorized to access this route!");
};

export default checkPermission;
