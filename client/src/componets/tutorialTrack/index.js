import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Nav from '../nav'
import Modal from '../modal/portfolioCreation.js'

function Index() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const allPortfilio = async () => {
    const response = await fetch("http://localhost:5000/edcourse/allportfolio", {
      method: "GET",
    });
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    allPortfilio();
  }, []);

  return (
    <>
    <Nav/>
      <div className="header">
        <h1>
          <strong>Pick a Track</strong>
        </h1>
      </div>
      <Modal/>
      <div className="cards">
        {data &&
          data.map((tutorial) => {
            return (
              <div className="card" key={tutorial.portfolioSlug}>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{tutorial.portfolioName}</strong>
                  </h5>
                  <p className="card-text">{tutorial.portfolioDescription}</p>
                  <button className="btn btn-primary"onClick={() => navigate("/account/tutorial/tutorialPage", { state: { portfolioSlug: tutorial.portfolioSlug } })}>
                    Start Learning
                  </button>
                  <button type="button" class="btn close"
                data-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Index;