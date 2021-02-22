import { CustomError, customErrorType } from './customError';
 
 export class NotFoundError extends CustomError{
     statusCode = 404;
     error: string;
     constructor( error : string ){
        super(error);
        this.error = error;
        Object.setPrototypeOf(this, NotFoundError.prototype);
     }
     serializeError = () : customErrorType => {
         return [{message : this.error}]
     }
 }