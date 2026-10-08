// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/reserve/:homeIndex", homesController.getReserve);
storeRouter.post("/bookings", homesController.postBooking);
storeRouter.get("/favourites", homesController.getFavouriteList);
storeRouter.post("/favourites/:homeIndex", homesController.postAddFavourite);
storeRouter.post("/favourites/:homeIndex/remove", homesController.postRemoveFavourite);

module.exports = storeRouter;
