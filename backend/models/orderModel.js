import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    trip: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trips',
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    tripName: { type: String, require: true },
    userName: { type: String, require: true },
    start: {type:  Date, require: true},
    end: {type: Date, require: true },
    guest: {type: Number, require: true},
    thumbnail: {type: String, require: true},
    superHost: {type: String, require: true},
    guideName: {type: String, require: true},
    message: {type: String, require: true},
    perNight: {type: Number, require: true},
    total: {type: Number, require: true},
    cleaner: {type: Number, require: true},
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date},
    paymentMethod: { type: String, required: true },
    isConfirmed:{type: Boolean, default: false},
    location: {type: String, require: true},
    paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String
    }
}, 
{
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema);

export default Order;
