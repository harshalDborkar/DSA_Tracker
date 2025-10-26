import { Sheet } from "../models/sheetsModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createSheet = async (req, res) => {
  try {
    const { sheetName } = req.body;
    if (!sheetName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sheet = await Sheet.findOne({ sheetName });
    if (sheet) {
      return res
        .status(400)
        .json({ message: "Sheet already exit try different" });
    }

    await Sheet.create({
      sheetName,
    });
    return res.status(201).json({
      message: "Sheet created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

export const getSheets = async (req, res) => {
  try {
    const userId = req.id;
    const sheets = await Sheet.find({}, { sheetName: 1 });
    return res.status(200).json(sheets);
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};
