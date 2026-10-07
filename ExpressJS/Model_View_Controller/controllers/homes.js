const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to Airbnb",
    currentPath: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registeration Successful for:", req.body);
  const {
    homeName,
    location,
    imageUrl,
    description,
    price,
    maxGuests,
    ratings,
  } = req.body;

  const home = new Home(
    req.body.homeName,
    req.body.location,
    req.body.imageUrl,
    req.body.description,
    req.body.price,
    req.body.maxGuests,
    req.body.ratings,
  );

  home.save();

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPath: "homeAdded",
  });
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPath: "Home",
    }),
  );
};
