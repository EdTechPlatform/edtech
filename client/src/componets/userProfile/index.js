import React from "react";
import Nav from "../nav";

function Profile() {
  const localUser = JSON.parse(localStorage.getItem("user_info"));
  console.log("lu", localUser);
  return (
    <>
    <Nav/>
      <h1>Profile</h1>
      <h3>
        name : {localUser.result.firstName} {" "}
        {localUser.result.lastName}
      </h3>
      <h3>email : {localUser.result.email} </h3>
    </>
  );
}

export default Profile;
