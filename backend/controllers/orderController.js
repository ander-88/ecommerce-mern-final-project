
import { response } from "express";
import OrderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// Placing orders using COD method


const placeOrder = async (req,res)=>{
    try{

        const {userId, items, amount, address}= req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment:false,
            date:Date.now()
        }

        const newOrder = new OrderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
        

    }

}

// Placing orders using visa method

const placeOrderVisa = async (req,res)=>{
    
}

// Placing orders using MasterCard method

const placeOrderMasterCard = async (req,res)=>{
    
}

// All orders Data for Admin Panel
const AllOrders = async (req,res)=>{

    try{
        const orders = await OrderModel.find({})
        res.json({success:true,orders})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

// User Order Data for FrontEnd
const UserOrders = async (req,res)=>{
    try{

        const {userId} = req.body
        const orders = await OrderModel.find({userId})
        res.json({success:true,orders})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Update order Status from Admin Panel
const UpdateStatus = async (req,res)=>{
    try{

        const {orderId,status} = req.body    
        await OrderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true, message:"Status Updated"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder,placeOrderVisa,placeOrderMasterCard,AllOrders,UserOrders,UpdateStatus}