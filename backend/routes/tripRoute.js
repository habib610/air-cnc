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


tripsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allTrips = await Trips.find({});
    res.status(200).json(allTrips);
  })
);

export default tripsRouter;