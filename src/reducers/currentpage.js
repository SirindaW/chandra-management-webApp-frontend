import { createSlice } from "@reduxjs/toolkit";

export const currentpageSlice = createSlice({
  name: "currentpage",
  initialState: {
    value: "",
  },
  reducers: {
    select_page: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { select_page } = currentpageSlice.actions;

export default currentpageSlice.reducer;
