// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

module.exports = class Home {
  constructor(
    homeName,
    location,
    imageUrl,
    description,
    price,
    maxGuests,
    ratings,
  ) {
    this.homeName = homeName;
    this.location = location;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.maxGuests = maxGuests;
    this.ratings = ratings;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : callback([]));
    });
  }
};
