import express from 'express'
import cors from 'cors'
import data from './utils/data.js'
import dotenv from 'dotenv'
import colors from 'colors'
import connectionDB from './config/db.js'
import tripsRouter from './routes/tripRoute.js'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000


connectionDB()



app.get('/', (req, res) => {
    res.send({
        name: "habib",
        id: 2000
    })
})


app.use('/api/trips',tripsRouter)

app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`.brightYellow.underline.bold)
})