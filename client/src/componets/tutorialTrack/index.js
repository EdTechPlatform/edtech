import React from "react";
import { Link } from "react-router-dom";
import Tutorial from "./tutorial.json";
import "./index.css";
import Nav from "../nav";

function index() {
  return (
    <>
      <Nav />
      <div className="header">
        <h1>
          <strong>Pick a Track</strong>
        </h1>
      </div>
      <div className="cards">
        {Tutorial &&
          Tutorial.map((tutorial) => {
            return (
              <div className="card" key={tutorial.id}>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{tutorial.title}</strong>
                  </h5>
                  <p className="card-text">{tutorial.content}</p>
                  <Link to={tutorial.path} className="btn btn-primary">
                    Start Learning
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default index;
