const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add a Home | Airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = async (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  try {
    const [homes] = await Home.findById(homeId);
    const home = homes[0];
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home | Airbnb",
      currentPage: "host-homes",
      editing: editing,
    });
  } catch (error) {
    next(error);
  }
};

exports.getHostHomes = async (req, res, next) => {
  try {
    const [registeredHomes] = await Home.fetchAll();
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Your Homes | Airbnb",
      currentPage: "host-homes",
    });
  } catch (error) {
    next(error);
  }
};

exports.postAddHome = async (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description);
  try {
    await home.save();
    res.redirect("/host/host-home-list");
  } catch (error) {
    next(error);
  }
};

exports.postEditHome = async (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description, id);
  try {
    await home.save();
    res.redirect("/host/host-home-list");
  } catch (error) {
    next(error);
  }
};

exports.postDeleteHome = async (req, res, next) => {
  const homeId = req.params.homeId;
  try {
    await Home.deleteById(homeId);
    res.redirect("/host/host-home-list");
  } catch (error) {
    next(error);
  }
};