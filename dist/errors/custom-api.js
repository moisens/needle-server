class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomAPIError.prototype);
    }
}
export default CustomAPIError;
