import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setQuestion } from "../redux/questionsSlice";
import { BASE_URL } from "../main";
const useGetQuestion = () => {
  const dispatch = useDispatch();
  const { selectedSheet } = useSelector((store) => store.sheet);
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${BASE_URL}/api/v1/question/getQuestion/${selectedSheet?._id}`
        );
        console.log("Sheet Questions", res.data);
        dispatch(setQuestion(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, [selectedSheet?._id]);
};

export default useGetQuestion;
