import React from "react";
import { Link } from "react-router-dom";
import Tutorial from "./tutorial.json";
import "./index.css";

function index() {
  return (
    <div>
      <div className="header">
        <h1 style={{display:"inline"}}><strong>Pick a Track</strong></h1>
        {/* <a href="/" class="btn btn-primary" style={{paddingRight:"50px",paddingLeft:"50px", float:"right", display:"inline"}}>
        Sign In
        </a> */}
      </div>
      <div className="cards">
      {Tutorial && Tutorial.map((tutorial) => {
        return (
          <div class="card" key={tutorial.id}>
            <div class="card-body">
              <h5 class="card-title"><strong>{tutorial.title}</strong></h5>
              <p class="card-text">
                {tutorial.content}
              </p>
              <Link to={tutorial.path} class="btn btn-primary" >
                Start Learning
              </Link>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default index;
