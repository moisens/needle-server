abstract class CustomAPIError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomAPIError.prototype)
  }
  //abstract serializeErrors(): { message: string, field?: string }[]
}

export default CustomAPIError;