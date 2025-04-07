import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Auth route is working!" });
});

router.post("/login", loginUser);

export default router;
