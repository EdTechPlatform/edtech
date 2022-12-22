import React from "react";
import SignUp from "./Signup.module.css";
import {  useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import {  signupGoogle } from "../../redux/actions/auth";
import Nav from "../nav";
 

function Signup() {
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    // console.log(accessToken);
    
    dispatch(signupGoogle(accessToken, nagivate));
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <>
    <Nav/>
     <div className={SignUp.loginContainer}>
      <div className={SignUp.loginContainerv2}>
        <button onClick={() => login()} className={SignUp.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign up with google
        </button>
      </div>
    </div>
    </>
    
  );
}

export default Signup;
