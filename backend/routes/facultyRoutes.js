import express from "express";
import { loginFaculty } from "../controllers/facultyController.js";

const router = express.Router();

router.post("/loginfaculty", loginFaculty);

export default router;