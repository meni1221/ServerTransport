import express, { IRouter, NextFunction, Request, Response }  from 'express'
import usersContoller from "../src/controllers/usersContoller"
import busesController from "../src/controllers/busesController"
import routesController from "../src/controllers/routesController"
import authController from "../src/controllers/authController"
import { verifyAdmin, verifyUser } from '../helpers/jwt';
import { handleError } from '../utils/ErrorHandle';

const router:IRouter = express.Router()

router.use("/users",verifyUser as NextFunction,usersContoller );
router.use("/buses",verifyUser as NextFunction,busesController );
router.use("/routes",verifyUser as NextFunction,routesController );
router.use("/admin-role",verifyAdmin as NextFunction,usersContoller );
router.use("/auth",authController );

router.use((req:Request,res:Response)=>{
handleError(res,404,"Miki is not found at Nimrodi Tower")
})


export default router