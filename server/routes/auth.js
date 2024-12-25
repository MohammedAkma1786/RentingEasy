import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import User from "../models/User.js";

const router = express.Router();

// multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files to the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

// User Register
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    // get information from the form
    const { firstName, lastName, email, password } = req.body;

    // The uploaded file is available as req.file
    const profileImage = req.file;
    if (!profileImage) {
      return res.status(400).send("No file uploaded");
    }

    // path to the uploaded profile photo
    const profileImagePath = profileImage.path;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User already Exists!" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new User
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profileImagePath,
    });

    // Save the user
    await newUser.save();

    // Send a successfull response
    res
      .status(200)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exists!" });
    }
    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;

    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
