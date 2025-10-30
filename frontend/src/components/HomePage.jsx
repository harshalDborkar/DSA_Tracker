import React from "react";
import ScoreCard from "./ScoreCard";
import Navbar from "./Navbar";
import SheetContainer from "./SheetContainer";

Navbar;
const HomePage = () => {
  return (
    <div>
      <Navbar />
      Home page
      <ScoreCard />
      <SheetContainer />
    </div>
  );
};

export default HomePage;
