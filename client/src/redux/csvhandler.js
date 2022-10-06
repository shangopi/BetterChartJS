import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  csv: null,
  charttype: null,
  x_data: null,
  y_data: null,
  arc_data: null,
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
    saveXdata: (state, action) => {
      state.x_data = action.payload;
    },
    saveYdata: (state, action) => {
      state.y_data = action.payload;
    },
    saveArcdata: (state, action) => {
      state.arc_data = action.payload;
    },
  },
});

export const { saveCSV, chooseChart, saveXdata, saveYdata, saveArcdata } =
  csvhandlerSlice.actions;

export default csvhandlerSlice.reducer;
