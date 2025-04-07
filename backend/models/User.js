import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  URN: { type: String, required: true, unique: true },
  course: { type: String, required: true },  // Fixed "coure" to "course"
  yearOfStudy: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String },
  fathersName: { type: String },
  mothersName: { type: String },
  batch: { type: String, required: true }  // Added batch field
});

export default mongoose.model("Student", StudentSchema, "students");
