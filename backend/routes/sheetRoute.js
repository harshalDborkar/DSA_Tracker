import express from "express";
import { createSheet, getSheets } from "../controllers/sheetController.js";

const router = express.Router();

router.route("/createSheet").post(createSheet);
router.route("/getsheets").get(getSheets);
export default router;
