const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let authenticateuser = require("../middleware/authenticateuser");
const User = require("../models/User");
// const { json } = require('express')
// require("dotenv").config();

// Route 1: Create a user using: POST '/api/auth/createuser'
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password must be at least 8 characters long").isLength({
      min: 8
    })
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({
        success,
        errors: errors.array()
      });
    }
    try {
      // Check if email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Sorry, email already exists."
        });
      }

      // Hash the password using bcrypt:
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      console.log(secPass, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });
      console.log(user);

      // Fetch user.id:
      const data = {
        user: { id: user.id }
      };
      console.log(data);

      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      console.log(authToken);
      res.json({ success, authToken });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send("Interval Server error");
    }
  }
);

// Route 2: Authenticate a user using: POST '/api/auth/login'
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists()
  ],
  async (req, res) => {
    let success = false;

    // Express-validator will validates requests and Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please log in with correct credentials."
        });
      }
      console.log(user);
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please log in with correct credentials."
        });
      }

      // Get user id
      const data = {
        user: { id: user.id }
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.json({
        success,
        authToken
      });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send("Interval Server error");
    }
  }
);

//Route 3: //Route 3: Get loggedin User Details using: POST '/api/auth/getuser'. Login required
router.post("/getuser", authenticateuser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Interval Server error");
  }
});

module.exports = router;
