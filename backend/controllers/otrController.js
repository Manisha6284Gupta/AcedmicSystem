// import OtrData from "../models/OtrModel.js";
import OtrData from "../models/Otr.js";

// Controller function to handle OTR uploads
export const uploadOtr = async (req, res) => {
  try {
    const { userId, extractedText } = req.body;

    // Store extracted OTR data in MongoDB
    const newEntry = new OtrData({ userId, extractedText });
    await newEntry.save();

    res.status(201).json({ message: "OTR data saved successfully!" });
  } catch (error) {
    console.error("Error saving OTR data:", error);
    res.status(500).json({ error: "Failed to save OTR data" });
  }
};
