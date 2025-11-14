import { createSlice } from "@reduxjs/toolkit";

const otherSheetSlice = createSlice({
  name: "otherSheet",
  initialState: {
    otherSheet: null,
    selectedSheet: null,
  },
  reducers: {
    setOtherSheet: (state, action) => {
      state.otherSheet = action.payload;
    },
    setSelectedSheet: (state, action) => {
      state.selectedSheet = action.payload;
    },
  },
});

export const { setOtherSheet, setSelectedSheet } = otherSheetSlice.actions;
export default otherSheetSlice.reducer;
