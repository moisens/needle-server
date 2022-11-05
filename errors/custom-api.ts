abstract class CustomAPIError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomAPIError.prototype)
  }
  abstract serializeErrors(): { 
    message: string, field?: string 
  }[]
}

export default CustomAPIError;