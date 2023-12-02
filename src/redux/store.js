import { configureStore } from "@reduxjs/toolkit";
import { trelloSlice } from "./slice/trelloLoginSlice";
import { trelloTable } from "./slice/trelloTable";
export const store = configureStore({
  reducer: {
    loginSlice: trelloSlice.reducer,
    trelloTable: trelloTable.reducer,
  },
});
