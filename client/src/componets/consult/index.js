import React from "react";
import { Link } from "react-router-dom";
import Consult from "./consultinfo.json";
import "./consult.css";
import ConsultTrack from "./consultTrack.json";
import Image from "./arrow-down.png";
import Nav from "../nav";

function index() {
  return (
    <>
      <Nav />
      <div className="cards">
        {Consult &&
          Consult.map((consult) => {
            return (
              <div className="card" key={consult.id}>
                <div className="card-body">
                  <h5 className="card-title" style={{ paddingBottom: "60px" }}>
                    <strong>{consult.title}</strong>
                  </h5>
                  <p className="card-text">{consult.content}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="box">
        <h4>Tutorial Track</h4>
      </div>
      <div className="Modules">
        {ConsultTrack &&
          ConsultTrack.map((track) => {
            return (
              <div className="Module" key={track.id}>
                <div className="Module-body">
                  <h5 className="Module-title">
                    <strong>{track.title}</strong>
                  </h5>
                  <img className="Module-img" src={Image} alt="" />
                  <div className="Module-text">
                    <Link to="/account/tutorial/consult/course">
                      <p>{track.content}</p> <p> (Click to open the video)</p>
                    </Link>
                  </div>
                  <img className="Module-img" src={Image} alt="" />
                  <div className="Module-circle"></div>
                  <img className="Module-img" src={Image} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default index;
