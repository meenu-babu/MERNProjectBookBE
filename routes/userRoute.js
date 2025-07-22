import express from "express"
import { handleAdminLogin,handleUserRegister,handleUserLogin } from "../controllers/userController"


const userRouter=express.Router()

userRouter.post('/register',handleUserRegister)
userRouter.post('/login',handleUserLogin)
userRouter.post('/admin',handleAdminLogin)

export default userRouter