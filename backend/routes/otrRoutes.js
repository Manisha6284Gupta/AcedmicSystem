


import express from "express";
import Otr from "../models/Otr.js";

const router = express.Router();

router.post("/upload-otr", async (req, res) => {
  try {
    const { userId, otrNumber, extractedText } = req.body;

    if (!userId || !otrNumber || !extractedText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOtr = new Otr({ userId, otrNumber, extractedText });
    await newOtr.save();

    res.status(201).json({ message: "OTR data saved successfully", data: newOtr });
  } catch (error) {
    console.error("Error saving OTR data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
