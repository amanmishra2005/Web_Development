const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Home.fetchFavourites((error, favouriteIndexes) => {
      if (error) {
        return next(error);
      }

      res.render("store/index", {
        registeredHomes,
        favouriteIndexes,
        pageTitle: "Home | Airbnb",
        currentPage: "index",
      });
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Home.fetchFavourites((error, favouriteIndexes) => {
      if (error) {
        return next(error);
      }

      res.render("store/home-list", {
        registeredHomes,
        favouriteIndexes,
        pageTitle: "Explore Homes | Airbnb",
        currentPage: "homes",
      });
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchBookings((error, bookings) => {
    if (error) {
      return next(error);
    }

    res.render("store/bookings", {
      bookings,
      pageTitle: "My Bookings | Airbnb",
      currentPage: "bookings",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Home.fetchFavourites((error, favouriteIndexes) => {
      if (error) {
        return next(error);
      }

      const favouriteHomes = favouriteIndexes.reduce((homes, index) => {
        if (registeredHomes[index]) {
          homes.push({ ...registeredHomes[index], homeIndex: index });
        }
        return homes;
      }, []);

      res.render("store/favourite-list", {
        registeredHomes: favouriteHomes,
        pageTitle: "Favourites | Airbnb",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddFavourite = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    const homeIndex = Number(req.params.homeIndex);
    if (!Number.isInteger(homeIndex) || !registeredHomes[homeIndex]) {
      return res.status(404).render("404", {
        pageTitle: "Home Not Found | Airbnb",
        currentPage: "404",
      });
    }

    Home.fetchFavourites((error, favourites) => {
      if (error) {
        return next(error);
      }

      if (!favourites.includes(homeIndex)) {
        favourites.push(homeIndex);
      }

      Home.saveFavourites(favourites, (saveError) => {
        if (saveError) {
          return next(saveError);
        }

        const returnTo = ["/", "/homes"].includes(req.body.returnTo)
          ? req.body.returnTo
          : "/homes";
        res.redirect(returnTo);
      });
    });
  });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeIndex = Number(req.params.homeIndex);
  if (!Number.isInteger(homeIndex)) {
    return res.status(400).send("Invalid home.");
  }

  Home.fetchFavourites((error, favourites) => {
    if (error) {
      return next(error);
    }

    Home.saveFavourites(
      favourites.filter((index) => index !== homeIndex),
      (saveError) => {
        if (saveError) {
          return next(saveError);
        }
        res.redirect("/favourites");
      }
    );
  });
};

exports.getReserve = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    const homeIndex = Number(req.params.homeIndex);
    const home = registeredHomes[homeIndex];

    if (!Number.isInteger(homeIndex) || !home) {
      return res.status(404).render("404", {
        pageTitle: "Home Not Found | Airbnb",
        currentPage: "404",
      });
    }

    res.render("store/reserve", {
      home,
      homeIndex,
      pageTitle: `Book ${home.houseName} | Airbnb`,
      currentPage: "bookings",
      errorMessage: null,
    });
  });
};

exports.postBooking = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    const homeIndex = Number(req.body.homeIndex);
    const home = registeredHomes[homeIndex];
    const guests = Number(req.body.guests);
    const checkIn = req.body.checkIn;
    const checkOut = req.body.checkOut;

    if (!Number.isInteger(homeIndex) || !home) {
      return res.status(404).render("404", {
        pageTitle: "Home Not Found | Airbnb",
        currentPage: "404",
      });
    }

    if (
      !Number.isInteger(guests) ||
      guests < 1 ||
      !checkIn ||
      !checkOut ||
      new Date(checkOut) <= new Date(checkIn)
    ) {
      return res.status(400).render("store/reserve", {
        home,
        homeIndex,
        pageTitle: `Book ${home.houseName} | Airbnb`,
        currentPage: "bookings",
        errorMessage: "Please choose valid dates and at least one guest. Check-out must be after check-in.",
      });
    }

    Home.fetchBookings((error, bookings) => {
      if (error) {
        return next(error);
      }

      bookings.push({
        houseName: home.houseName,
        price: home.price,
        location: home.location,
        photoUrl: home.photoUrl,
        checkIn,
        checkOut,
        guests,
      });

      Home.saveBookings(bookings, (saveError) => {
        if (saveError) {
          return next(saveError);
        }
        res.redirect("/bookings");
      });
    });
  });
};
