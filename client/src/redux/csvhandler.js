import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  csv: null,
  charttype: null,
};

export const csvhandlerSlice = createSlice({
  name: "csvhandler",
  initialState,
  reducers: {
    saveCSV: (state, action) => {
      state.csv = action.payload;
    },
    chooseChart: (state, action) => {
      state.charttype = action.payload;
    },
  },
});

export const { saveCSV, chooseChart } = csvhandlerSlice.actions;

export default csvhandlerSlice.reducer;
