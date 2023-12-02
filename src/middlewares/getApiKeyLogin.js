import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../configs/client";
export const getApikey = createAsyncThunk("getApikey", async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  return data;
});
