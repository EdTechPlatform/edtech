import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/home/index";
import Login from "./componets/login";
import Signup from "./componets/signup";
import Profile from "./componets/userProfile";
import Register from "./componets/register/index";
import TutoriaTrack from "./componets/tutorialTrack/index.js";
import Consult from "./componets/consult/index.js";
import VideoPlayer from "./componets/videoplayer";
import Nav from "./componets/nav"
import TestRoute from "./componets/testRoute"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/tutorial" element={<TutoriaTrack/>} />
        <Route path="/account/testroute" element={<TestRoute/>} />
        <Route path="/account/tutorial/consult" element={<Consult/>} />
        <Route path="/account/tutorial/consult/course" element={<VideoPlayer/>} />
      </Routes>
    </div>
  );
}

export default App;
