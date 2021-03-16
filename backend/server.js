import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send({
        name: "habib",
        id: 2000
    })
})

app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`)
})