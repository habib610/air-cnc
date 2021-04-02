import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { generateToken, isAuth } from '../utils/utils.js'
const userRouter = express.Router()



userRouter.get('/:id', isAuth, expressAsyncHandler(async(req, res)=> {
    const user = await User.findById(req.params.id)
    if(user){
        res.status(200).send(user)  
    } else {
        res.status(404).send({message: "User not found"})
    }
}))



userRouter.post('/registration', expressAsyncHandler(async(req, res)=> {
    const user = await User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })
    const createdUsers = await user.save()

    res.send({
        _id: createdUsers._id,
        name: createdUsers.name,
        password: createdUsers.password,
        email: createdUsers.email,
        isAdmin: createdUsers.isAdmin,
        token: generateToken(createdUsers)
    })
}))

//existing
userRouter.post('/signin', expressAsyncHandler(async(req, res)=> {
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
        }
        return
        
    } else {
        res.status(500).send({message: "Invalid email or password"})
    }
}))


export default userRouter;