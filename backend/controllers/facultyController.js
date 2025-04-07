import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import Faculty from "../models/Faculty.js";

export const loginFaculty = async (req, res) => {
  const { username, password } = req.body;

  console.log(username, ", ", password);
  try {
    const user = await Faculty.findOne({ username });
    if (user) {
      console.log(' User found:', user);
    } else {
      console.log('No user found with this username');
    }



    if (!user) return res.status(400).json({ error: "User not found" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    
    res.json({ token, user });
  } catch (err) {
    console.log("error is: ",err);
    res.status(500).json({ error: "Server error" });
  }
};