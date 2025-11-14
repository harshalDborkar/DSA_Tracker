import React from "react";
import SheetName from "./SheetName";
import useGetOtherSheet from "../hooks/useGetOtherSheet";
import { useSelector } from "react-redux";
const SheetNames = () => {
  useGetOtherSheet();
  const { otherSheet } = useSelector((store) => store.sheet);
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <SheetName />
      </ul>
    </div>
  );
};

export default SheetNames;
