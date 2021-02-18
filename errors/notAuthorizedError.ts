import { CustomError, customErrorType } from './customError';

const notAuthorizedMsg = 'You are not authorized to access this resource';
export class NotAuthorizedError extends CustomError{
    statusCode= 403;
    constructor(){
        super(notAuthorizedMsg);
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
     }
     serializeError = () : customErrorType => {
        return [{message : notAuthorizedMsg}]
     }
    
}