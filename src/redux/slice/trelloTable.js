import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../../middlewares/getTaskMiddlewares";

const initialState = {
  columns: [],
  tasks: [],
  name: "hello",
};

export const trelloTable = createSlice({
  name: "trelloTable",
  initialState,
  reducers: {
    setColumn: (state, action) => {
      state.columns = action.payload;
    },
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      const columns = [...action.payload.columns];
      const tasks = [...action.payload.tasks];
      localStorage.setItem("columns", JSON.stringify(columns));
      localStorage.setItem("tasks", JSON.stringify(tasks));
      state.columns = columns;
      state.tasks = tasks;
    });
  },
});
