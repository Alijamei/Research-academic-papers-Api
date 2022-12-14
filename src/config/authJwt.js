import jwt from 'jsonwebtoken';

export function jwtSign(payload){
     return jwt.sign({userId:payload}, process.env.JWT_SIGN)
}

export function jwtVerify(token){
     return jwt.verify(token,process.env.JWT_SIGN)
}