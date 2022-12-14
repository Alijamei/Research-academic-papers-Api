import {DatabaseAuth} from '../models/authModel.js';
import { jwtSign,jwtVerify } from '../config/authJwt.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;


export const signupService = async(username,password,res) => {

    try{ 

        let [isUserExisting,] = await DatabaseAuth.getByusername(username)
      
        if(isUserExisting.length != 0){
            return res.send(isUserExisting)
        }
        /* Hash password */
        
         bcrypt.hash(password, saltRounds, async(err, hash) => {
            let newPost = new DatabaseAuth(username,hash)   

           /* Save username and password */

            await newPost.save()  

            /* Find the new saved user id */
        
            let [foundUser,] = await DatabaseAuth.getByusername(username)
            
            const userId = foundUser.map(auth => {return auth.id })    

            console.log(userId)
            /* Add the id to the payload to return the token  */

             const jwt= jwtSign(userId.toString())

            /* Add the token to cookie to pass it in other protected requests */

               let jwtCookie = res.cookie("jwtCookie",jwt,{ httpOnly: true});

                res.send(userId.toString())
                console.log(userId)
        });

    

      

     
    }

    catch(error){
       console.log(error)
    }

}


export const loginService = async(username,password) => {

    try{
        /* Find the the typed username */

         let [foundUser,]= await DatabaseAuth.getByusername(username);

         /* Find password and compare it with the hashed password */

         let userPassword = foundUser.map(auth => {return auth.password })
        
         bcrypt.compare(password,userPassword.toString(), function(err, result) {
             if(result == true){
                console.log('Signin')
             }
             else{
                console.log(err)
             }
        });
    }
    catch(error){
       console.log(error)
    }

}


