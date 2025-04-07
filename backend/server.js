import express from "express";
// import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js"
// import Student from "./models/User.js"; // ✅ Import Student Model
import cookieParser from "cookie-parser";
import helmet from "helmet";
import otrRoutes from "./routes/otrRoutes.js";
import showDetailsRoute from './routes/showDetailsRoute.js';


// import otrRoutes from "./routes/otrRoutes.js";

// dotenv.config();
connectDB();

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(helmet());
// app.use(cors());
app.use(cors({ origin: "*" }));
app.use("/api/otr", otrRoutes); 
app.use("/api/Faculty",facultyRoutes );

app.use("/api/auth", authRoutes);
// app.get("/api/auth", (req, res) => {
//   res.json({ message: "Backend is working!" });
// });
app.use("/api/students/", showDetailsRoute)
app.use("/api/faculty", facultyRoutes);
app.use("/api/otr", otrRoutes);


app.get("/", (req, res) => {
   res.json("Server is ready");
 });

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log("Server running on port ", PORT));