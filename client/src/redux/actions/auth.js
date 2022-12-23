import { AUTH } from "../const/actionsTypes";
import * as api from "../../api/index";

export const loadUser = () => async (dispath) => {
  const localUser = JSON.parse(localStorage.getItem("user_info"));

  if (localUser) {
    dispath({ type: AUTH, data: localUser });
  }
};


export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    // login user
    const { data } = await api.signInGoogle(accessToken);

    dispatch({ type: AUTH, data });
   
    navigate("/");
  } catch (err) {
    console.log("sign in error", err);
  }
};



export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signUpGoogle(accessToken);
    dispatch({ type: AUTH, data });
    navigate("/account/register");
  } catch (err) {
    

    console.log("sign up error", err);
  }
};
