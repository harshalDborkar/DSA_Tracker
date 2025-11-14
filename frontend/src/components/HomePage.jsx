import React from "react";
import ScoreCard from "./ScoreCard";
import Navbar from "./Navbar";
import SheetContainer from "./SheetContainer";
import Fotter from "./Fotter";

Navbar;
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ScoreCard />
      <SheetContainer />
      <Fotter />
    </div>
  );
};

export default HomePage;
