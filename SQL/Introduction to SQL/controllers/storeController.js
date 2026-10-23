const Favourite = require("../models/favourite");
const Booking = require("../models/booking");
const Home = require("../models/home");

const getHomes = async (req, res, next) => {
  try {
    const [[registeredHomes], favouriteIds] = await Promise.all([
      Home.fetchAll(),
      Favourite.getFavourites(),
    ]);
    res.render("store/index", {
      registeredHomes: registeredHomes,
      favouriteIds,
      pageTitle: "Home | Airbnb",
      currentPage: "index",
    });
  } catch (error) {
    next(error);
  }
};

exports.getIndex = getHomes;

exports.getHomes = async (req, res, next) => {
  try {
    const [[registeredHomes], favouriteIds] = await Promise.all([
      Home.fetchAll(),
      Favourite.getFavourites(),
    ]);
    res.render("store/home-list", {
      registeredHomes,
      favouriteIds,
      pageTitle: "Homes | Airbnb",
      currentPage: "Home",
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookings = async (req, res, next) => {
  try {
    const [bookings] = await Booking.fetchAll();
    res.render("store/bookings", {
      bookings,
      pageTitle: "My Bookings | Airbnb",
      currentPage: "bookings",
    });
  } catch (error) {
    next(error);
  }
};

exports.getReserve = async (req, res, next) => {
  try {
    const [homes] = await Home.findById(req.params.homeId);
    const home = homes[0];
    if (!home) {
      return res.redirect("/homes");
    }

    res.render("store/reserve", {
      home,
      errorMessage: null,
      pageTitle: `Book ${home.houseName} | Airbnb`,
      currentPage: "Home",
    });
  } catch (error) {
    next(error);
  }
};

exports.postBooking = async (req, res, next) => {
  const { homeId, checkIn, checkOut } = req.body;
  const guests = Number(req.body.guests);
  const homeIdNumber = Number(homeId);

  try {
    if (!Number.isInteger(homeIdNumber) || homeIdNumber < 1) {
      return res.redirect("/homes");
    }

    const [homes] = await Home.findById(homeIdNumber);
    const home = homes[0];
    if (!home) {
      return res.redirect("/homes");
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    const startDate = new Date(`${checkIn}T00:00:00Z`);
    const endDate = new Date(`${checkOut}T00:00:00Z`);
    const validDates =
      datePattern.test(checkIn || "") &&
      datePattern.test(checkOut || "") &&
      !Number.isNaN(startDate.getTime()) &&
      !Number.isNaN(endDate.getTime()) &&
      startDate.toISOString().slice(0, 10) === checkIn &&
      endDate.toISOString().slice(0, 10) === checkOut &&
      endDate > startDate;

    if (!validDates || !Number.isInteger(guests) || guests < 1) {
      return res.status(400).render("store/reserve", {
        home,
        errorMessage: "Enter valid booking dates and at least one guest.",
        pageTitle: `Book ${home.houseName} | Airbnb`,
        currentPage: "Home",
      });
    }

    await Booking.create(homeIdNumber, checkIn, checkOut, guests);
    res.redirect("/bookings");
  } catch (error) {
    next(error);
  }
};

exports.getFavouriteList = async (req, res, next) => {
  try {
    const [[registeredHomes], favouriteIds] = await Promise.all([
      Home.fetchAll(),
      Favourite.getFavourites(),
    ]);
    const favouriteHomes = registeredHomes.filter((home) =>
      favouriteIds.includes(home.id),
    );
    res.render("store/favourite-list", {
      favouriteHomes,
      pageTitle: "My Favourites | Airbnb",
      currentPage: "favourites",
    });
  } catch (error) {
    next(error);
  }
};

exports.postAddToFavourite = async (req, res, next) => {
  const homeId = Number(req.body.id);
  if (!Number.isInteger(homeId) || homeId < 1) {
    return res.redirect("/homes");
  }

  try {
    await Favourite.addToFavourite(homeId);
    res.redirect("/favourites");
  } catch (error) {
    next(error);
  }
};

exports.postRemoveFromFavourite = async (req, res, next) => {
  const homeId = Number(req.params.homeId);
  if (!Number.isInteger(homeId) || homeId < 1) {
    return res.redirect("/favourites");
  }

  try {
    await Favourite.deleteById(homeId);
    res.redirect("/favourites");
  } catch (error) {
    next(error);
  }
};

exports.getHomeDetails = async (req, res, next) => {
  try {
    const [[homes], favouriteIds] = await Promise.all([
      Home.findById(req.params.homeId),
      Favourite.getFavourites(),
    ]);
    const home = homes[0];
    if (!home) {
      return res.redirect("/homes");
    }

    res.render("store/home-detail", {
      home,
      isFavourite: favouriteIds.includes(home.id),
      pageTitle: `${home.houseName} | Airbnb`,
      currentPage: "Home",
    });
  } catch (error) {
    next(error);
  }
};
