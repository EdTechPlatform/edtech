import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from '../modal/videoUploader'
import { useNavigate } from "react-router-dom";
import Nav from "../nav";

// import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
    const location = useLocation();

    console.log("--222",location.state);
    const moduleNumber = location.state.moduleNumber;
    console.log(moduleNumber);
    
    const portfolioSlug = location.state.portfolioSlug;
    console.log("--3332",location.state.moduleNumber);
    console.log("---4444",location.state.portfolioSlug);

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getVideo = async () => {
        const response = await fetch(
            `http://localhost:5000/edcourse/getmodule/${portfolioSlug}/${moduleNumber}`,
            {
                method: "GET",
            }
        );
        const json = await response.json();
        setData(json);
    };

    useEffect(() => {
        getVideo();
        // eslint-disable-next-line
    }, []);

    console.log("khj",data);
    console.log("=======",data.videos);
    const arr = data.videos;

    return (
        <div>
            <Nav />
            {/* {moduleNumber} */}

            {arr &&
        arr.map((item) => {
          return (
            <div className="card" key={item.videoNumber}>
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{item.videoTitle}</strong>
                </h5>
                <p className="card-text">{item.videoNumber}</p>
                {/* <button className="btn btn-primary" onClick={() => navigate("/account/tutorial/tutorialPage/modulevideo", { state: { moduleNumber: tutorial.moduleNumber, portfolioSlug: num } })}>
                  Start Learning
                </button> */}
              </div>
            </div>
          );
        })}
            <Modal />
            




        </div>
    );
};

export default TutorialPage;
