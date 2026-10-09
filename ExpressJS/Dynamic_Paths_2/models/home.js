// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const Favourite = require("./favourite");

const homeDataPath = path.join(rootDir, "data", "homes.json");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description || "";
  }

  save(callback = () => {}) {
    Home.fetchAll((registeredHomes) => {
      // Edit Home Case
      if (this.id) {
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home,
        );
      }
      // Add Home Case
      else {
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        callback(error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          return callback([]);
        }
        return callback([], err);
      }

      try {
        callback(JSON.parse(data));
      } catch (parseError) {
        callback([], parseError);
      }
    });
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

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes, error) => {
      if (error) {
        return callback(error);
      }

      const homeIndex = homes.findIndex((home) => home.id === homeId);
      if (homeIndex === -1) {
        return callback(null);
      }

      homes.splice(homeIndex, 1);
      fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
        if (error) {
          return callback(error);
        }

        Favourite.removeHomeIndex(homeIndex, callback);
      });
    });
  }
};
