import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../configs/client";
export const getTask = createAsyncThunk("getTask", async () => {
  const apiKey = JSON.parse(localStorage.getItem("user"));

  client.setToken(apiKey.ApiKey);
  const { response, data } = await client.get("/tasks");

  return data.data;
});
