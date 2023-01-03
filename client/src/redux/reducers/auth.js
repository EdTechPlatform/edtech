import * as actionType from "../const/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("user_info", JSON.stringify({ ...action?.data }));
      // console.log("userDeatils : ", action.data);
      // localStorage.setItem("email", ( action.data.result.email ));
      localStorage.setItem("jToken", action.data.token);

      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.clear("user_info", "jToken");

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
