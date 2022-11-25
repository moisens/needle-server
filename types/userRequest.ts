import { Request } from "express";
import payload from "./userPayload.js"

/**
 * Extended Express Request interface to pass Payload Object to the request. Used by the auth middleware to pass data to the request by token signing (jwt.sign) and token verification (jwt.verify).
 * @param {string} userId
 */
type request = Request & payload;

export default request;