import {DatabaseAuth} from '../models/authModel.js';
import {loginService,signupService} from '../services/authService.js';
import bcrypt from 'bcrypt';


export const signUP = async(req,res) => {

    try{ 
        const {username,password} = req.body
        
        await signupService(username,password,res)
     
    }

    catch(error){
       console.log(error)
    }

}

export const login = async(req,res) => {

    try{
         const {username,password} = req.body

         await loginService(username,password)
    }
    catch(error){
       console.log(error)
    }

}

export const forgotPassword = async(req,res) => {

    try{ 
        res.clearCookie("jwtCookie");   
        res.send(req.cookies.jwtCookie)
     }
    catch(error){
       console.log(error)
    }
}

// export const test = async(req,res) => {

//     const token = req.headers.authorization?.split(' ')[1];
//     if(!token){
//         return res.send('Unauthorized')
//     }

//     let payload;
//     try{
//         payload = jwtVerify(token)
//     }
//     catch(error){
//         console.log('error')
//     }

//         const [getUserinfo,] = await DatabaseAuth.getByid(payload.userId)
//         if(!getUserinfo){
//             res.send("User not found")
//         }
//         // let id = getUserinfo.map(get => {return get.name })
//         res.send(getUserinfo)

    
//     // res.send(payload)

// }
