import React from "react";
import SheetName from "./SheetName";
import SheetScore from "./SheetScore";
import SheetQuestions from "./SheetQuestions";
const SheetContainer = () => {
  return (
    <div className="flex items-center flex-col">
      <SheetName /> <SheetScore /> <SheetQuestions />
    </div>
  );
};

export default SheetContainer;
