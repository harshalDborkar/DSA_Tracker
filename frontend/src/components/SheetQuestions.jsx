import React from "react";
import QuestionRow from "./QuestionRow";
import useGetQuestion from "../hooks/useGetQuestion";
import { useSelector } from "react-redux";

const SheetQuestions = () => {
  useGetQuestion();
  const { questions } = useSelector((store) => store.question);
  // console.log(question);
  if (!questions) return;
  console.log(questions);

  return (
    <div className="w-[80%]">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Status</th>
              <th>Problem</th>
              <th>platform</th>
            </tr>
          </thead>
          <tbody>
            <QuestionRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SheetQuestions;
