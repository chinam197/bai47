import { createSlice } from "@reduxjs/toolkit";
import { getApikey } from "../../middlewares/getApiKeyLogin";
const initialState = {
  login: {
    email: "",
    isLogin: false,
    message: "idle",
    ApiKey: "",
  },
};

export const trelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.login.isLogin = action.payload;
    },
    setColumn: (state, action) => {
      state.columns = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getApikey.fulfilled, (state, action) => {
      state.login.ApiKey = action.payload.data.apiKey;
      state.login.message = "success";
      state.login.isLogin = true;
      localStorage.setItem("user", JSON.stringify(state.login));
    });
    builder.addCase(getApikey.rejected, (state, action) => {
      state.login.message = "error";
    });
    builder.addCase(getApikey.pending, (state) => {
      state.login.message = "pending";
    });
  },
});
