import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../nav";


const ModuleVideoPage = () => {

  const location = useLocation();

  const moduleNumber = location.state.moduleNumber;
  const portfolioSlug = location.state.portfolioSlug;
  const [datav, setDatav] = useState([]);

  useEffect(() => {
    getVideo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVideo = async () => {
    const response = await fetch(
      `https://ed-tech-service-backend.onrender.com/edcourse/getmodule/${portfolioSlug}/${moduleNumber}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    setDatav(json);
  };

  const arr = datav.videos;

  const [toggle, setToggle] = useState("1");
  return (
    <>
      <Nav />
        {arr && arr.map((item) => {
          return (
            <>
              <div className="main" key={item._id}>
                <div className="text">
                  <h4 className="border border-3 text-left" onClick={() => setToggle(item._id)}>{item.videoTitle} </h4>
                  {toggle === item._id ? (
                    <>
                      {/* <p>{videoTitle}</p> */}
                    </>
                  ) : null}
                </div>

                <div className="img">
                  {toggle === item._id ? (
                    <>
                      {/* <p>{videoLink}</p> */}
                      <iframe
                        width="50%"
                        height="50%"
                        src={item.videoLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
export default ModuleVideoPage;