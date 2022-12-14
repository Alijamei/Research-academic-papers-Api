
import { jwtVerify } from '../config/authJwt.js';
import {DatabaseAuth} from '../models/authModel.js';

export const AuthMiddleware=async(req,res,next) => {
    /* Get the token that have been saved in the cooke when the user  signed in or signed up*/
    const token = req.cookies.jwtCookie;

    if(!token){
        return res.send('Unauthorized')
    }

    let payload;
    try{
      /* Verify the token */
        payload = jwtVerify(token)
    }
    catch(error){
        console.log('error')
    }
        /* Get the payload that have been added to the token which is the (userId) to use it to query from the database  */
       
        const [getUserinfo,] = await DatabaseAuth.getByid(payload.userId)
        if(!getUserinfo){
            res.send("User not found")
        }
        /* Pass data in this middleware to the Middleware after it the protected routes*/
       
        res.locals.Id = payload.userId
        return next()
        
}