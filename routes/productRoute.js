import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductById } from "../controllers/productController.js"



const productRouter=express.Router()

productRouter.post('/create',createProduct)
productRouter.post('/delete',deleteProduct)
productRouter.post('/getone',getProductById)
productRouter.get('/getall',getAllProducts)

export default productRouter