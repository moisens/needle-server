import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";
class UnauthenticatedError extends CustomAPIError {
    statusCode = StatusCodes.UNAUTHORIZED;
    constructor(message) {
        super(message);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
export default UnauthenticatedError;
