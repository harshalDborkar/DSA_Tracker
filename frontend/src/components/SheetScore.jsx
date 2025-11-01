import React from "react";

const SheetScore = () => {
  return (
    <div className="flex flex-row items-center">
      <h1 className="text-xl font-bold">Box Office News!</h1>
      {/* For TSX uncomment the commented types below */}
      <div
        className="radial-progress"
        style={{ "--value": 70 } /* as React.CSSProperties */}
        aria-valuenow={70}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};

export default SheetScore;
