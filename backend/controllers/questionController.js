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

    // if (link.toLowerCase().includes("leetcode")) {
    //     platform = "leetcode";
    // } if (link.toLowerCase().includes("leetcode")) {
    //     platform = "leetcode";
    // }

    const newQuestion = await Question.create({
      title,
      link,
      platform,
      tags,
      sheets: sheetName,
      // profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
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

// export const getMessage = async (req, res) => {
//     try {
//         const userId = req.id;
//         const questions = await Conversation.findOne({
//             participants: { $all: [senderId, receiverId] }
//         }).populate("messages");
//         return res.status(200).json(conversation?.messages);
//     } catch (error) {
//         console.log(error);
//     }
// }
