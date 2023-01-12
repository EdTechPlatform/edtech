import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

function Index() {
  const [data,setData]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/edcourse/allportfolio").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  console.warn(data)
  return (
    <>
      <div className="header">
        <h1>
          <strong>Pick a Track</strong>
        </h1>
      </div>
      <div className="cards">
        {data &&
          data.map((tutorial) => {
            return (
              <div className="card" key={tutorial.id}>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{tutorial.portfolioName}</strong>
                  </h5>
                  <p className="card-text">{tutorial.portfolioDescription}</p>
                  <Link to="{tutorial.}" className="btn btn-primary">
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

export default Index;
