import React, { useState } from "react";
import "./index.css";
import coursecontent from "./videoplayercourse.json";
import Nav from "../nav";

const VideoPlayer = () => {
  const [vid, uid] = useState(coursecontent[0].name);
  const [title, utitle] = useState(coursecontent[0].title);

  const renderVideo = () => {
    return (
      <>
        <iframe
          width="100%"
          height="100%"
          // src={"https://www.youtube.com/embed/" + vid}
          src={"https://drive.google.com/file/d/1gocFtRXgznh_Hck2ft2GoGrvylw_C_LV/view"}

          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3 className="title">{title}</h3>
      </>
    );
  };
  return (
      <>
          <Nav/>
      <main className="container">
        <section className="main-video">{renderVideo()}</section>

        <section className="video-playlist">
          <h3 className="title">Title of Video Playlist</h3>
          <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
          <div className="videos">
            {coursecontent.map((record) => {
              return (
                <div className="menu-list">
                  <p>{record.id}</p>
                  <a
                    href="#!"
                    className="title"
                    onClick={() => {
                      uid(record.name);
                      utitle(record.title);
                    }}
                  >
                    {record.title}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default VideoPlayer;
