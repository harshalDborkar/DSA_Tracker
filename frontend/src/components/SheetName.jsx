import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";

const SheetName = ({ sheet }) => {
  const dispatch = useDispatch();
  const { otherSheet } = useSelector((store) => store.sheet);
  const selectedSheetHandler = (user) => {
    // dispatch(setSelectedSheet(sheet));
  };
  return (
    <div onClick={() => selectedSheetHandler(sheet)}>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>{sheet?.sheetName}</a>
        </li>
      </ul>
    </div>
  );
};

export default SheetName;
