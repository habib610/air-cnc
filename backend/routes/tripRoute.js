import express from "express";
import Trips from "../models/tripModel.js";
import expressAsyncHandler from "express-async-handler";
import data from "../utils/data.js";
import { isAdmin, isAuth } from "../utils/utils.js";

const tripsRouter = express.Router();

tripsRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
      // await Trips.remove({})
    const createdTrips = await Trips.insertMany(data.allTrips);
    res.send({createdTrips});
  })
);

tripsRouter.get('/experience', expressAsyncHandler(async(req, res)=> {
  const allExperience = await Trips.find({category: 'experiences'})
  if(allExperience){
    res.status(200).send(allExperience)
  } else {
    res.status(404).send({message: "Nothing Found"})
  }
}))
tripsRouter.get('/homes', expressAsyncHandler(async(req, res)=> {
  const allHomes = await Trips.find({category: 'homes'})
  if(allHomes){
    res.status(200).send(allHomes)
  } else {
    res.status(404).send({message: "Nothing Found"})
  }
}))

//load all trips
tripsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    // const place = req.query.keyword ? {
    //   place:{
    //     $regex: req.query.keyword,
    //     $options: 'i'
    //   }      
    // }  : {}
    // const tripByPlace = await Trips.find({...place});

    const name = req.query.keyword ? {
      name:{
        $regex: req.query.keyword,
        $options: 'i'
      }      
    }  : {}
    const tripByName = await Trips.find({...name});

    // const mergedTrips = [...tripByName, ...tripByPlace]
    // const filterdTrips = mergedTrips.filter(item => item._id )
    
    res.status(200).json(tripByName);
  })
);

// load trips by id
tripsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const singleTrip = await Trips.findById(id)

    if(singleTrip){
      res.status(200).json(singleTrip)
    }
    else{
      res.status(404).send({message: "Trip Not Found"})
    }
  })
);


tripsRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async(req, res)=> {
  const {name, total, category, description, perPerson, place, thumbnail, location, numReviews, rating, guestCapacity, bedrooms, beds, baths, cleaner, frontView, innerView, guideThumbnail, superHost   } = await req.body


 
  const newTrip = await Trips({
    name, total, category, description, perPerson, place, thumbnail, location, numReviews, rating, guestCapacity, bedrooms, beds, baths, cleaner, frontView, innerView, guideThumbnail, superHost
  })
  const createdTrip = await newTrip.save()
  res.status(200).send("New Trip Created Successfully")
}))


export default tripsRouter;