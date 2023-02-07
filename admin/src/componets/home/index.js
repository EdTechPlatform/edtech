import React from 'react';
import Record_home from "./record_home.json";
import './home.css';
import Nav from '../nav';

function index() {
  return (
    <>
    <Nav/>
    <div>
     <div className="home">
        {Record_home &&
          Record_home.map((record) => {
            return (
              <span className="home-body" key={record.id}>
<<<<<<< HEAD
                <video src={record.source} alt=""  className="video"/>
=======
                {/* <img src={record.source} alt=""  className="video"/> */}
                <video
                        width="100%"
                        height="100%"
                        src={record.source}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        controls
                        controlsList="nodownload"
                      ></video>
>>>>>>> 83d917de05ea9fb47855b928519f21b720f35830
              </span>
            );
          })}
      </div>
    </div>
      
    </>
  )
}

export default index ;