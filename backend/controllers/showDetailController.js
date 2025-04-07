import Student from "../models/User.js"; // Ensure this model exists

export const getStudentsDetail = async (req, res) => {
  try {
    const { courses, batch } = req.body;

    if (!courses || courses.length === 0 || !batch) {
      return res.status(400).json({ error: "Courses and batch are required." });
    }

    console.log("🔹 Received Request:", { courses, batch });

    const students = await Student.find({
      course: { $in: courses },
      batch: batch,
    });
    console.log("Hello: ", students.length);
    if (students.length === 0) {
      return res.status(200).json({ message: "No students found." });
    }

    res.json(students);
  } catch (error) {
    console.error("❌ Error fetching students:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
