import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherSheet } from "../redux/otherSheetSlice";
import { BASE_URL } from "../main";

const useGetOtherSheet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherSheet = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`${BASE_URL}/api/v1/sheet/getsheets`);
        console.log("Other users ", res);
        dispatch(setOtherSheet(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherSheet();
  }, []);
};

export default useGetOtherSheet;
