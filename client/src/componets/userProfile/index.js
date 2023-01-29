import React, { useState, useEffect } from "react";
import Nav from "../nav";

function Profile() {
  const [usercred, setUserCred] = useState([]);

  const userdeatils = async () => {
    const response = await fetch("https://ed-tech-service-backend.onrender.com/users/getuser", {
      method: "GET",
      headers: {
        jToken: localStorage.getItem("jToken"),
      },
    });
    const json = await response.json();
    setUserCred(json);
  };

  useEffect(() => {
    userdeatils();
  }, []);

  return (
    <>
      <Nav />
      <h1>Profile</h1>
      <img
        src={usercred.profilePicture}
        alt="..."
        style={{ height: "329px", width: "246px" }}
      />
      <h3>
        name : {usercred.firstName} {usercred.lastName}
      </h3>
      <h3>email : {usercred.email}</h3>
    </>
  );
}

export default Profile;
