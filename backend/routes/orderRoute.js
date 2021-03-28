import express from 'express';
import expressAsync from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils/utils.js';

const orderRoute = express.Router();

orderRoute.post('/', isAuth, expressAsync(async(req, res)=> {

    const order = await new Order({
        tripName: req.body.cartItems.name,
        thumbnail: req.body.cartItems.thumbnail,
        guest: req.body.cartItems.guest,
        start: req.body.cartItems.start,
        end: req.body.cartItems.end,
        user: req.user._id,
        total: req.body.cartItems.total,
        cleaner: req.body.cartItems.cleaner,
        guideThumbnail: req.body.cartItems.guideThumbnail,
        superHost: req.body.cartItems.superHost,
        paymentMethod: req.body.cartItems.paymentMethod,
        message: req.body.cartItems.message
    })
    const createdOrder = await order.save()
    res.status(201).send({message: "New Order Created", order: createdOrder})
}))


orderRoute.get('/:id', isAuth, expressAsync(async(req, res)=> {
    const id = req.params.id
    const order = await  Order.findById(id)
    if(order){
        res.status(200).send(order)
    } else{
        res.status(404).send({message: "Order Not Found"})
    }
    
}))

orderRoute.put('/:id/pay', isAuth, expressAsync(async(req, res)=> {
    const order = await  Order.findById(req.params.id)
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }
        const updateOrder = await order.save()
        res.status(200).send({message: "Order Paid", order: updateOrder})
    } else{
        res.status(404).send({message: "Order Not Found"})
    }
    
}))


export default orderRoute;