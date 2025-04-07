import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  

  console.log(username, ", ", password);
  try {
    const user = await User.findOne({ username });
    if (user) {
      console.log(' User found:', user);
    } else {
      console.log('No user found with this username');
    }



    if (!user) return res.status(400).json({ error: "User not found" });

    
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    
    res.json({ token, user });
  } catch (err) {
    console.log("error is: ",err);
    res.status(500).json({ error: "Server error" });
  }
};