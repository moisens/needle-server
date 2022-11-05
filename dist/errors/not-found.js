import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api";
class NotFoundError extends CustomAPIError {
    statusCode = StatusCodes.NOT_FOUND;
    constructor(message) {
        super(message);
        //this.statusCode = StatusCodes.NOT_FOUND;
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
export default NotFoundError;
