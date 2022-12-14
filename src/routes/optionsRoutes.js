import express from 'express';
import {getUserOption} from '../controllers/optionsController.js';



const router = express.Router();


/* All the routers after Authmiddleware would be protectedroutes only if data have been checked in Authmiddleware and authenticated the next protected routes will work*/

router.post("/:page", getUserOption)

// router.post("/", getUserOptions)


export default router;