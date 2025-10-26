import { Question } from "../models/questionModel.js";
import { Sheet } from "../models/sheetsModel.js";
import { User } from "../models/userModel.js";

export const markQuestion = async (req, res) => {
  try {
    const userId = req.id;
    const questionId = req.params.id;

    const user = await User.findById(userId);

    let questionSolved = await User.findOne({
      _id: userId,
      solvedQuestions: questionId,
    });

    if (questionSolved) {
      await User.updateOne(
        { _id: userId },
        { $pull: { solvedQuestions: questionId } }
      );
      // await user.save()
      return res.status(200).json({ message: "marked as not solved" });
    } else {
      await User.updateOne(
        { _id: userId },
        { $addToSet: { solvedQuestions: questionId } }
      );
      // await user.save()
      return res.status(200).json({ message: "marked as solved" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

export const addQuestion = async (req, res) => {
  try {
    const { link, title, tags, platform, sheetName } = req.body;
    if (!link || !title || !tags || !platform) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const question = await Question.findOne({ link });
    if (question) {
      const qId = question._id;
      const inSheet = await Sheet.findOne({
        sheetName: sheetName,
        sheetQuestions: qId,
      });
      if (!inSheet) {
        const updatedQuestion = await Question.findByIdAndUpdate(
          qId,
          {
            $addToSet: { sheets: sheetName }, // push topic only if not already present
          },
          { new: true } // return the updated document
        );

        await Sheet.updateOne(
          { sheetName },
          { $addToSet: { sheetQuestions: qId } }
        );
        return res.status(400).json({
          message:
            "Question already in database , but not present in the sheet",
        });
      }

      return res
        .status(400)
        .json({ message: "Question already exists in database" });
    }

    const newQuestion = await Question.create({
      title,
      link,
      platform,
      tags,
      sheets: sheetName,
    });

    await Sheet.updateOne(
      { sheetName },
      { $addToSet: { sheetQuestions: newQuestion._id } }
    );

    return res.status(201).json({
      message: "question added",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async (req, res) => {
  try {
    const sheetId = req.params.id; // 1
    const userId = req.id; // 2

    const user = await User.findById(userId).select("solvedQuestions"); // 4
    const sheet = await Sheet.findById(sheetId).populate("sheetQuestions");
    const questionsWithSolvedFlag = sheet.sheetQuestions.map((q) => ({
      ...q._doc,
      isSolved: user.solvedQuestions.includes(q._id.toString()),
    }));

    // const solvedInSheet = sheet.sheetQuestions.filter((q) =>
    //   user.solvedQuestions.includes(q._id)
    // );

    return res.status(200).json(questionsWithSolvedFlag); // 5
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
