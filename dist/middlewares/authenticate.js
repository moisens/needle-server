import jwt from "jsonwebtoken";
import UnauthenticatedError from "../errors/unauthenticated.js";
const auth = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer"))
        throw new UnauthenticatedError("Autentication invalid!");
    const token = authHeaders.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload.userId };
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new UnauthenticatedError("Autentication invalid!");
        }
    }
};
export default auth;
