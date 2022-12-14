import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class UnauthorizedError extends CustomAPIError {
  constructor(message: string) {
    super(message);
  }
}

export default UnauthorizedError;
