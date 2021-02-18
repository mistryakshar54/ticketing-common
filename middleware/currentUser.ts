import { Request , Response, NextFunction } from 'express'
import  jwt  from 'jsonwebtoken';

type UserPayload = {
    id : string;
    email : string;
}

declare global{
    namespace Express{
        interface Request{
            currentUser? : UserPayload;
            session : {
                jwt : string
            }
        }
    }
}

export const currentUser = ( req : Request, res: Response, next : NextFunction ) => {
    if( !req.session?.jwt ){
        next();
    }
    try{
        const decodedToken = jwt.verify( req.session?.jwt , process.env.JWT_KEY!  ) as UserPayload
        req.currentUser = decodedToken;
    }catch{
        next();
    }  
}