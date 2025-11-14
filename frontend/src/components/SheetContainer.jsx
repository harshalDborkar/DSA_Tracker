import React from "react";
import SheetNames from "./SheetNames";
import SheetScore from "./SheetScore";
import SheetQuestions from "./SheetQuestions";
const SheetContainer = () => {
  return (
    <div>
      <div className="flex bg-base-200 rounded-xl items-center flex-col m-10">
        <SheetNames /> <SheetScore /> <SheetQuestions />
      </div>
    </div>
  );
};

export default SheetContainer;
