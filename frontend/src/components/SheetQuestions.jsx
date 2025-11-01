import React from "react";
import QuestionRow from "./QuestionRow";

const SheetQuestions = () => {
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
