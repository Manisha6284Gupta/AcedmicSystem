import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

export default mongoose.model("Faculty", StudentSchema,"faculty");