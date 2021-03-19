import express from "express";
import Trips from "../models/tripModel.js";
import expressAsyncHandler from "express-async-handler";
import data from "../utils/data.js";

const tripsRouter = express.Router();

tripsRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //   await Trips.remove({})
    const createdTrips = await Trips.insertMany(data.allTrips);
    res.send({createdTrips});
  })
);

//load all trips
tripsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allTrips = await Trips.find({});
    res.status(200).json(allTrips);
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

export default tripsRouter;