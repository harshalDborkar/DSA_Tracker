import { createSlice } from "@reduxjs/toolkit";

const otherSheetSlice = createSlice({
  name: "otherSheet",
  initialState: {
    otherSheet: null,
  },
  reducers: {
    setOtherSheet: (state, action) => {
      state.otherSheet = action.payload;
    },
  },
});

export const { setOtherSheet } = otherSheetSlice.actions;
export default otherSheetSlice.reducer;
