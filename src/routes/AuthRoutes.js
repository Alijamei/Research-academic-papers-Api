import express from 'express';
import {forgotPassword,signUP,login} from '../controllers/AuthControllers.js';


const router = express.Router();

router.post("/signup", signUP)
router.post("/login", login)
router.post("/forget", forgotPassword)

// router.get("/login", test)



export default router;