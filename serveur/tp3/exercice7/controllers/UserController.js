const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.addUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const id = await User.create({ username, email, password, role });
    res.status(201).json({ message: "User created", id });
  } catch (err) {
    res.status(500).json({ message: "Failed user create", error: err.message });
  }
};
