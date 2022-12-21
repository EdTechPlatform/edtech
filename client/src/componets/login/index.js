import React from "react";
import {  useNavigate } from "react-router-dom";
import LoginStyles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signinGoogle } from "../../redux/actions/auth";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    // console.log(accessToken);
    dispatch(signinGoogle(accessToken, navigate));
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

   

  return (
    <div className={LoginStyles.loginContainer}>
      <div className={LoginStyles.loginContainerv2}> 
        <button onClick={() => login()} className={LoginStyles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign in with google
        </button>
      </div>
    </div>
  );
}

export default Login;
