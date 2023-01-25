import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const [vid, uid] = useState("");
  // const [title, utitle] = useState(coursecontent[0].title);
  const navigate = useNavigate();

  useEffect(() => {
    getVideo();
  }, []);

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



  console.log("khj", data);
  console.log("=======", data.videos);
  console.log("---", data.videos);
  console.log("...upper vis => ", vid)
  // let results = data.videos.map(item => item.videoLink);
  // console.log("1111",results);
  const arr = data.videos;

  const renderVideo = (vid) => {
    console.log("...render vis => ", vid)
    return (
      <>
        {vid === undefined || "" ? <h3>CLick on a Video</h3> : <iframe
          controlsList="nodownload"
          width="100%"
          height="100%"
          src={vid}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>}
      </>
    );
  };

  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <Nav />

      <main className="container">
        <section onContextMenu={(e) => e.preventDefault()} className="main-video">{renderVideo()}</section>

        <section className="video-playlist">
          <h3 className="title">{portfolioSlug} Module {moduleNumber}</h3>

          <div className="videos">
            {arr && arr.map((item) => {

              return (
                <div className="menu-list" key = {item._id}>

                  {/* <p>{record.id}</p> */}
                  {/* <NavLink
                    to="#!"
                    className="title"
                    onClick={() => {
                      uid(item.videoLink);
                      //   // utitle(record.title);
                    }}

                  > */}

                  <button onClick={() => renderVideo(item.videoLink)}>

                  {item.videoTitle}

                  </button>
                  {/* </NavLink> */}
                  {/* <iframe
                    controlsList="nodownload"
                    width="100%"
                    height="100%"
                    src={item.videoLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
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
