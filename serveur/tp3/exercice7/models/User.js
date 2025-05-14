const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  constructor(id, username, email, password, role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // méthode de création d'un nouvel utilisateur
  static async create({ username, email, password, role }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)", [username, email, hashedPassword, role]);
    return result.insertId;
  }
}

module.exports = User;
