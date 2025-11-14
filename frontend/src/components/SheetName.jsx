import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setSelectedSheet } from "../redux/otherSheetSlice";

const SheetName = ({ sheet }) => {
  const dispatch = useDispatch();
  const { otherSheet } = useSelector((store) => store.sheet);
  const selectedSheetHandler = (user) => {
    dispatch(setSelectedSheet(sheet));
    console.log(sheet);
  };
  return (
    <div onClick={() => selectedSheetHandler(sheet)}>
      <ul className="menu menu-vertical flex flex-row lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>{sheet?.sheetName}</a>
        </li>
      </ul>
    </div>
  );
};

export default SheetName;
