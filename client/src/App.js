import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/home";
import Login from "./componets/login";
import Signup from "./componets/signup";
import Profile from "./componets/userProfile";
import Register from "./componets/register/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
