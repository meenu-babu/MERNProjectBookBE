import orderModel from "../models/orderModel.js"

// global variables
const currency = 'pkr'
const deliveryCharges = 10

// place order using cash on delivery
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

    }
}
// place order usingStripe payment method
const placeOrderStripe = async (req, res) => {
    try {

    } catch (error) {

    }
}

// verify stripe method
const verifyStripe = async (req, res) => {
    try {

    } catch (error) {

    }
}



//All orders data for admin panel
const allOrders = async (req, res) => {
    try {

    } catch (error) {

    }
}


//All orders data forfrontend
const userOrders = async (req, res) => {
    try {
        const {userId}=req.body
        const orders=await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
console.log(error)
res.jsonn({success:false,message:error.mmessage})
    }
}

//updating order status for admin panel
const updateStatus = async (req, res) => {
    try {

    } catch (error) {

    }
}

export { placeOrder, placeOrderStripe, allOrders, userOrders, verifyStripe, updateStatus }
