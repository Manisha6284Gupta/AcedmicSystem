import mongoose from "mongoose";

const otrSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  extractedText: { type: String, required: true },
});

const OtrData = mongoose.model("OtrData", otrSchema);
export default OtrData;
