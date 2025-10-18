import express from "express";
import {
  markQuestion,
  addQuestion,
} from "../controllers/questionController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/markQuestion/:id").post(isAuthenticated, markQuestion);
router.route("/addQuestion").post(addQuestion);

export default router;
