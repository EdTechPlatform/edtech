import React from 'react';
import Record_home from "./record_home.json";
import './home.css';
import Nav from '../nav'

function index() {
  return (
    <>
    <div>
    <Nav/>
     <div className="home">
        {Record_home &&
          Record_home.map((record) => {
            return (
              <span className="home_video" key={record.id}>
                <img src={record.source} alt="" />
              </span>
            );
          })}
      </div>
    </div>
      
    </>
  )
}

export default index ;