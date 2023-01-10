import React from 'react';
import Record_home from "./record_home.json";
import './home.css';
import Product from "./p.png";
import Consult from "./c.png";

function index() {
  return (
    <>
    <div>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={Product} class="carousel-image d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000" >
      <img src={Consult} class="carousel-image d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item" data-bs-interval="1000">
      <img src="..." class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     <div className="home">
        {Record_home &&
          Record_home.map((record) => {
            return (
              <span className="home-body" key={record.id}>
                <img src={record.source} alt=""  className="video"/>
              </span>
            );
          })}
      </div>
    </div>
      
    </>
  )
}

export default index ;