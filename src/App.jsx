import Login from "./auth/login/Login";
import Board from "./components/Board";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useLayoutEffect } from "react";
import { trelloSlice } from "./redux/slice/trelloLoginSlice";
const { setIsLogin } = trelloSlice.actions;
const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginSlice.login.isLogin);
  const login = JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    login && dispatch(setIsLogin(login.isLogin));
  }, [isLogin]);

  return <main>{login.isLogin ? <Board /> : <Login />}</main>;
};

export default App;
