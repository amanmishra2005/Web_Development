const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouritesPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {
  static fetchAll(callback) {
    fs.readFile(favouritesPath, "utf8", (error, data) => {
      if (error && error.code === "ENOENT") {
        return callback(null, []);
      }
      if (error) {
        return callback(error);
      }

      try {
        callback(null, JSON.parse(data));
      } catch (parseError) {
        callback(parseError);
      }
    });
  }

  static add(homeIndex, callback) {
    this.fetchAll((error, favourites) => {
      if (error) {
        return callback(error);
      }

      if (!favourites.includes(homeIndex)) {
        favourites.push(homeIndex);
      }

      this.saveAll(favourites, callback);
    });
  }

  static remove(homeIndex, callback) {
    this.fetchAll((error, favourites) => {
      if (error) {
        return callback(error);
      }

      this.saveAll(
        favourites.filter((favouriteIndex) => favouriteIndex !== homeIndex),
        callback,
      );
    });
  }

  static removeHomeIndex(homeIndex, callback) {
    this.fetchAll((error, favourites) => {
      if (error) {
        return callback(error);
      }

      this.saveAll(
        favourites.reduce((updatedFavourites, favouriteIndex) => {
          if (favouriteIndex < homeIndex) {
            updatedFavourites.push(favouriteIndex);
          } else if (favouriteIndex > homeIndex) {
            updatedFavourites.push(favouriteIndex - 1);
          }
          return updatedFavourites;
        }, []),
        callback,
      );
    });
  }

  static saveAll(favourites, callback) {
    fs.writeFile(favouritesPath, JSON.stringify(favourites, null, 2), callback);
  }
};
