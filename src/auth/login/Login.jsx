import React from "react";
import { useState } from "react";
import "./scss/style.scss";
import { client } from "../../configs/client";
import { getApikey } from "../../middlewares/getApiKeyLogin";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginSlice.login.isLogin);
  const [login, setLogin] = useState({
    email: "",
    isLogin: false,
  });

  const handleChange = (e) => {
    setLogin({ ...login, email: e.target.value });
  };
  const handleSubmit = (e) => {
    const { email } = login;
    dispatch(getApikey(email));
  };
  return (
    <div className="wrapper-Login" hidden={isLogin}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form-login"
      >
        <input
          type="text"
          placeholder="Enter your Email"
          onChange={handleChange}
          autoFocus
          className="input-login"
        />
        <button className="button-login">Enter</button>
      </form>
    </div>
  );
};

export default Login;
