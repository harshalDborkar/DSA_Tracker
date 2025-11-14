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

// export const getQuestions = async (req, res) => {
//   try {
//     const sheetId = req.params.id; // 1
//     const userId = req.id; // 2

//     const user = await User.findById(userId).select("solvedQuestions"); // 4
//     const sheet = await Sheet.findById(sheetId).populate("sheetQuestions");
//     const questionsWithSolvedFlag = sheet.sheetQuestions.map((q) => ({
//       ...q._doc,
//       isSolved: user.solvedQuestions.includes(q._id.toString()),
//     }));

//     // const solvedInSheet = sheet.sheetQuestions.filter((q) =>
//     //   user.solvedQuestions.includes(q._id)
//     // );

//     return res.status(200).json(questionsWithSolvedFlag); // 5
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json(error);
//   }
// };
