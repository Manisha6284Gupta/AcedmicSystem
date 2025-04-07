import mongoose from "mongoose";

const OtrSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  otrNumber: { type: String, required: true },
  extractedText: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Otr", OtrSchema);
