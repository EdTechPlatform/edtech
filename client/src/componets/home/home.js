import React from "react";
import Record_home from "./record_home.json";
import './home.css' ;

class Home extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Home;