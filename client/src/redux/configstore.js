import { configureStore } from '@reduxjs/toolkit'
import csvhandlerReducer from "./csvhandler"

export const store = configureStore({
  reducer: {
    csvhandler: csvhandlerReducer
  },
})