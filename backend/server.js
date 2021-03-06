import express from 'express'
import cors from 'cors'
import data from './utils/data.js'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path';
import connectionDB from './config/db.js'
import tripsRouter from './routes/tripRoute.js'
import userRouter from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
import uploadRouter from './routes/uploadRoute.js'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 5000


connectionDB()



// app.get('/', (req, res) => {
//     res.send({
//         name: "habib",
//         id: 2000
//     })
// })



app.use('/api/trips',tripsRouter)
app.use('/api/users', userRouter)
app.use('/api/order', orderRoute)
app.get('/api/config/paypal', (req, res)=> {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use('/api/upload', uploadRouter)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`.brightYellow.underline.bold)
})