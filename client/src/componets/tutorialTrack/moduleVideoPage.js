import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from '../modal/videoUploader'
import Nav from "../nav";


const ModuleVideoPage = () => {

  const location = useLocation();

  // console.log("--222", location.state);
  const moduleNumber = location.state.moduleNumber;
  // console.log(moduleNumber);

  const portfolioSlug = location.state.portfolioSlug;
  // console.log("--3332", location.state.moduleNumber);
  // console.log("---4444", location.state.portfolioSlug);

  const [datav, setDatav] = useState([]);
  // const [vid, uid] = useState("");
  // const [title, utitle] = useState(coursecontent[0].title);
  // const navigate = useNavigate();

  useEffect(() => {
    getVideo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVideo = async () => {
    const response = await fetch(
      `http://localhost:5000/edcourse/getmodule/${portfolioSlug}/${moduleNumber}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    setDatav(json);
  };



  // console.log("datav => ", datav);
  // console.log("=======", datav.videos);
  // console.log("---", datav.videos);
  // console.log("...upper vis => ", vid)
  // let results = data.videos.map(item => item.videoLink);
  // console.log("1111",results);
  const arr = datav.videos;
  // console.log("arr => ", arr);

  const [toggle, setToggle] = useState("1");
  return (
    <>
      <Nav />
      <div className="App" >
        {arr && arr.map(({ videoTitle, videoLink, _id }) => {
          return (
            <>
              <div className="main" key={_id}>
                <div className="text">
                  <h4 className="border border-3 text-left" onClick={() => setToggle(_id)}>{videoTitle} </h4>
                  {toggle === _id ? (
                    <>
                      {/* <p>{videoTitle}</p> */}
                    </>
                  ) : null}
                </div>

                <div className="img">
                  {toggle === _id ? (
                    <>
                      {/* <p>{videoLink}</p> */}
                      <iframe
                        width="50%"
                        height="50%"
                        src={videoLink}
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
      </div>
      <Modal />
    </>
  );
}
export default ModuleVideoPage;