import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("MONGO_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const otrSchema = new mongoose.Schema({
  userId: String,
  extractedText: String,
});

const OtrData = mongoose.model("OtrData", otrSchema);

app.post("/api/upload-otr", async (req, res) => {
  try {
    const { userId, extractedText } = req.body;
    const newEntry = new OtrData({ userId, extractedText });
    await newEntry.save();
    res.status(201).json({ message: "OTR data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
