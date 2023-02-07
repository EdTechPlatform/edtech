import React from "react";
import Record_home from "./record_home.json";
import "./home.css";
import Nav from "../nav";

// import { Player } from "video-react";
// import "~video-react/dist/video-react.css";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function index() {
  return (
    <>
      <Nav />
      <div>
        <div className="home">
          {Record_home &&
            Record_home.map((record) => {
              return (
                <span className="home-body" key={record.id}>
                  {/* <img src={record.source} alt="" className="video" /> */}

                  {/* <Player>
                    <source src={record.source} />
                  </Player> */}
                  {/* <iframe
                        width="50%"
                        height="50%"
                        src={record.source}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        
                      ></iframe> */}
                  {/* <video>
    <source src={record.source} type="video/mp4" />
    <source src={record.source} type="video/mp4" />
    
</video> */}
                  <Video autoPlay loop >
                    <source src="https://www.youtube.com/watch?v=nLQ-9vfEjUI" type="video/mp4" />
                  </Video>
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default index;
