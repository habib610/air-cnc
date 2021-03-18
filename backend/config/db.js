import mongoose from 'mongoose'

const connectionDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected at ${conn.connection.host}`.brightCyan.underline.bold)
    } catch (error) {
        console.log(`${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectionDB