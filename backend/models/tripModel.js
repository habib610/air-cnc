import mongoose from 'mongoose'

const tripSchema = mongoose.Schema({
    name: {type: String, require: true, unique: true},
    perPerson: {type: Number, require: true},
    total: {type: Number, require: true},
    numReviews: {type: Number, require: true},
    rating: {type: Number, require: true},
    guestCapacity: {type: Number, require: true},
    bedrooms: {type: Number, require: true},
    beds: {type: Number, require: true},
    baths: {type: Number, require: true},
    cleaner: {type: Number, require: true},
    place: {type: String, require: true},
    category: {type: String, require: true},
    thumbnail: {type: String, require: true},
    frontView: {type: String, require: true},
    innerView: {type: String, require: true},
    location: {type: String, require: true},
    guideThumbnail: {type: String, require: true},
    superHost: {type: String, require: true},
    description: {type: String, require: true},
}, {
    timestamps: true
})

const Trips = mongoose.model('Trips', tripSchema);

export default Trips;