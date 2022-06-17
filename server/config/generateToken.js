const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const key = process.env.JWT_SECRET
const generateToken = (id) => {
  return jwt.sign({ id }, key, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;