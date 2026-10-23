const db = require("../utils/databaseUtil");

module.exports = class Booking {
  static async createTable() {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        homeId INT NOT NULL,
        checkIn DATE NOT NULL,
        checkOut DATE NOT NULL,
        guests INT NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (homeId) REFERENCES homes(id) ON DELETE CASCADE
      )
    `);
  }

  static async create(homeId, checkIn, checkOut, guests) {
    await this.createTable();
    return db.execute(
      "INSERT INTO bookings (homeId, checkIn, checkOut, guests) VALUES (?, ?, ?, ?)",
      [homeId, checkIn, checkOut, guests],
    );
  }

  static async fetchAll() {
    await this.createTable();
    return db.execute(`
      SELECT bookings.id, bookings.homeId,
        DATE_FORMAT(bookings.checkIn, '%Y-%m-%d') AS checkIn,
        DATE_FORMAT(bookings.checkOut, '%Y-%m-%d') AS checkOut,
        bookings.guests, homes.houseName, homes.location,
        homes.price, homes.photoUrl
      FROM bookings
      INNER JOIN homes ON homes.id = bookings.homeId
      ORDER BY bookings.createdAt DESC
    `);
  }
};
