// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback = () => {}) {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        callback(error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static fetchFavourites(callback) {
    const favouritesPath = path.join(rootDir, "data", "favourites.json");
    fs.readFile(favouritesPath, "utf8", (err, data) => {
      if (err && err.code === "ENOENT") {
        return callback(null, []);
      }
      if (err) {
        return callback(err);
      }

      try {
        callback(null, JSON.parse(data));
      } catch (parseError) {
        callback(parseError);
      }
    });
  }

  static saveFavourites(favourites, callback) {
    const favouritesPath = path.join(rootDir, "data", "favourites.json");
    fs.writeFile(favouritesPath, JSON.stringify(favourites, null, 2), callback);
  }

  static fetchBookings(callback) {
    const bookingsPath = path.join(rootDir, "data", "bookings.json");
    fs.readFile(bookingsPath, "utf8", (err, data) => {
      if (err && err.code === "ENOENT") {
        return callback(null, []);
      }
      if (err) {
        return callback(err);
      }

      try {
        callback(null, JSON.parse(data));
      } catch (parseError) {
        callback(parseError);
      }
    });
  }

  static saveBookings(bookings, callback) {
    const bookingsPath = path.join(rootDir, "data", "bookings.json");
    fs.writeFile(bookingsPath, JSON.stringify(bookings, null, 2), callback);
  }
};
