import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from '../modal/videoUploader'
import { useNavigate } from "react-router-dom";
import Nav from "../nav";

// import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const location = useLocation();

  console.log("--222", location.state);
  const moduleNumber = location.state.moduleNumber;
  console.log(moduleNumber);

  const portfolioSlug = location.state.portfolioSlug;
  console.log("--3332", location.state.moduleNumber);
  console.log("---4444", location.state.portfolioSlug);

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

  console.log("khj", data);
  console.log("=======", data.videos);
  const arr = data.videos;
  const renderVideo = () => {
    return (
      <>
        <iframe
          width="100%"
          height="100%"
          src={"https://drive.google.com/file/d/1gocFtRXgznh_Hck2ft2GoGrvylw_C_LV/view"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <h3 className="title">{title}</h3> */}
      </>
    );
  };
  return (
    <div>
      <Nav />

      <main className="container">
        <section className="main-video">{renderVideo()}</section>

        <section className="video-playlist">
          <h3 className="title">{portfolioSlug} Module {moduleNumber}</h3>

          <div className="videos">
            {arr && arr.map((item) => {
              return (
                <div className="menu-list">

                  {/* <p>{record.id}</p> */}
                  <a
                    href="#!"
                    className="title"
                  // onClick={() => {
                  //   uid(record.name);
                  //   utitle(record.title);
                  // }}
                  >
                    {item.videoTitle}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Modal />





    </div>
  );
};

export default TutorialPage;
