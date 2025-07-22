import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./DB/connection.js";
import connectCloudinary from "./DB/cloudinary.js";
import userRouter from "./routes/userRoute.js"


const app=express()
const PORT=5000

// middlewares
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

// API endpoints
app.use('/api/user',userRouter)

// API endpoints
app.get('/',(req,res)=>{
    res.send("Bookkart server is running and waiting for request")
})

app.listen(PORT,()=>{
    console.log("Server is running on PORT:",PORT)
})