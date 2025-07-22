import validator from "validator"
import userModel from "../models/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



// controller function to handle user login
const handleUserLogin=async(req,res)=>{

}


// controller function to handle user register
const handleUserRegister=async(req,res)=>{
try {
   const {name,email,password}=req.body
   const exists=await userModel.findOne({email})
   if(exists){
return res.json({success:false,message:"User already exist"})
   } 

   if(!validator.isEmail(email)){
return res.json({success:false,message:"Please enter valid email address"})
   }
   if(password.length <8){
    return res.json({success:false,message:"Please enter strong password"})
   }

   const salt=await bcrypt.genSalt(10)
} catch (error) {
    
}

}

// controller function to handle admin login
const handleAdminLogin=async(req,res)=>{

}

export {handleUserLogin,handleUserRegister,handleAdminLogin}
