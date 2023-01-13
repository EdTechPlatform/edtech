import React from "react";
import Nav from "../nav";
import "./index.css";
import { useEffect, useState } from "react";
import Modal from "../modal/portfolioCreation.js";
import { Link } from "react-router-dom";

function Index() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getCount = (count) => {
    setCount(count + 1);
    console.log("coming", count);
  };

  useEffect(() => {
    fetch("http://localhost:5000/edcourse/allportfolio").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [count]);

  console.warn(data);
  return (
    <>
      <Nav />
      <div className="header">
        <h1>
          <strong>Pick a Track</strong>
        </h1>
      </div>
      <Modal onSubmit={getCount} />
      <div className="cards">
        {data &&
          data.map((tutorial) => {
            return (
              <div className="card" key={tutorial._id}>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{tutorial.portfolioName}</strong>
                  </h5>
                  <p className="card-text">{tutorial.portfolioDescription}</p>
                  <Link to="/account/tutorial/module" className="btn btn-primary">
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
