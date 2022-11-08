import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class BadRequestError extends CustomAPIError {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(message: string) {
    super(message);
    //this.statusCode = StatusCodes.BAD_REQUEST;
  }
  serializeErrors() {
      return [{message: this.message}]
  }
}

export default BadRequestError;