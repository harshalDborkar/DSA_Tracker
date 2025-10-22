import express from "express";
import { createSheet } from "../controllers/sheetController.js";

const router = express.Router();

router.route("/createSheet").post(createSheet);

export default router;
