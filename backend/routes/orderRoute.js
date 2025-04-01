import express from 'express'
import {placeOrder,placeOrderVisa,placeOrderMasterCard,AllOrders,UserOrders,UpdateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()


//Admin Features
orderRouter.post('/list',adminAuth,AllOrders)
orderRouter.post('/status',adminAuth,UpdateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)


// User Features
orderRouter.post('/userorders',authUser,UserOrders)

export default orderRouter