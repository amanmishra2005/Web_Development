// Core Module
// External Module
const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home to Airbnb" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  const homeName = req.body.homeName?.trim();
  const location = req.body.location?.trim();
  const imageUrl = req.body.imageUrl?.trim();
  const description = req.body.description?.trim();
  const price = Number(req.body.price);
  const maxGuests = Number(req.body.maxGuests);
  const ratings = Number(req.body.ratings);
  let validImageUrl = false;

  try {
    const parsedImageUrl = new URL(imageUrl);
    validImageUrl = ["http:", "https:"].includes(parsedImageUrl.protocol);
  } catch {
    validImageUrl = false;
  }

  if (
    !homeName ||
    !location ||
    !validImageUrl ||
    !description ||
    !Number.isFinite(price) ||
    price <= 0 ||
    !Number.isInteger(maxGuests) ||
    maxGuests < 1 ||
    !Number.isFinite(ratings) ||
    ratings < 1 ||
    ratings > 5
  ) {
    return res.status(400).render("addHome", {
      pageTitle: "Add Home to Airbnb",
      error: "Please complete every field with valid values.",
    });
  }

  registeredHomes.push({ homeName, location, imageUrl, description, price, maxGuests, ratings });
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;