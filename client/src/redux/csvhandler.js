import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  csv: null,

}

export const csvhandlerSlice = createSlice({
  name: 'csvhandler',
  initialState,
  reducers: {
    saveCSV: (state, action) => {
      state.csv = action.payload
    },
  },
})


export const { saveCSV } = csvhandlerSlice.actions

export default csvhandlerSlice.reducer