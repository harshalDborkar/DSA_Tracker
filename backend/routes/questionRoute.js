import express from "express";
import {
  markQuestion,
  addQuestion,
  getQuestions,
} from "../controllers/questionController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/markQuestion/:id").post(isAuthenticated, markQuestion);
router.route("/addQuestion").post(addQuestion);
router.route("/getQuestion/:id").get(isAuthenticated, getQuestions);

export default router;
