

import express from "express";
// import { getStudentsDetail } from "../controllers/showDetailContoller.js";
import { getStudentsDetail } from "../controllers/showDetailController.js";

const router = express.Router();

router.post("/studentsDetail", getStudentsDetail);

export default router;
