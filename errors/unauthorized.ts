import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";


class UnauthorizedError extends CustomAPIError {
  statusCode = StatusCodes.FORBIDDEN;
  constructor(message: string) {
    super(message);
  }
  serializeErrors() {
    return [{ message: this.message }]
  }
}

export default UnauthorizedError;