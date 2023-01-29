import React from "react";
import SignUp from "./Signup.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signupGoogle } from "../../redux/actions/auth";

function Signup() {
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(signupGoogle(accessToken, nagivate));
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <>
      <div className={SignUp.loginContainer}>
        <div className={SignUp.loginContainerv2}>
          <div>
            Already Signed Up? <Link to="/account/login">Login</Link>
          </div>
          
          <button onClick={() => login()} className={SignUp.googleBTN}>
            <i className="fa-brands fa-google"></i> Sign up with google
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
