const db = require("../utils/databaseUtil");

module.exports = class Favourite {
  static async createTable() {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS favourites (
        homeId INT NOT NULL PRIMARY KEY,
        FOREIGN KEY (homeId) REFERENCES homes(id) ON DELETE CASCADE
      )
    `);
  }

  static async addToFavourite(homeId) {
    await this.createTable();
    return db.execute(
      "INSERT IGNORE INTO favourites (homeId) VALUES (?)",
      [homeId],
    );
  }

  static async getFavourites() {
    await this.createTable();
    const [favourites] = await db.execute("SELECT homeId FROM favourites");
    return favourites.map(({ homeId }) => homeId);
  }

  static async deleteById(homeId) {
    await this.createTable();
    return db.execute("DELETE FROM favourites WHERE homeId = ?", [homeId]);
  }
};
