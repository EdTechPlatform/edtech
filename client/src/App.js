
import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from "./componets/home";
import Login from "./componets/login";
import Signup from "./componets/signup";
import Nav from "./componets/nav"
import Profile from "./componets/userProfile";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
        <Route path="/account/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
