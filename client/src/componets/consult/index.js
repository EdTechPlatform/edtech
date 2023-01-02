import React from 'react'
import Consult from "./consultinfo.json"
import './consult.css'
import ConsultTrack from "./consultTrack.json"
import Image from "./arrow-down.png"

function index() {
  return (
    <>
    <div className="SignInBtn">
        <a href="/" class="btn btn-primary" style={{paddingRight:"50px",paddingLeft:"50px", float:"right", display:"inline"}}>
        Sign In
        </a>
      </div>
    <div className='cards'>
         {Consult && Consult.map((consult) => {
        return (
          <div class="card" key={consult.id}>
            <div class="card-body">
              <h5 class="card-title" style={{paddingBottom:"60px"}}><strong>{consult.title}</strong></h5>
              <p class="card-text">
                {consult.content}
              </p>
              {/* <a href="/" class="btn btn-primary" >
                Start Learning
              </a> */}
            </div>
          </div>
        );
      })}
    </div>
    <div className='box'>
        <h4>Tutorial Track</h4>
    </div>
    <div className='Modules'>
         {ConsultTrack && ConsultTrack.map((track) => {
        return (
          <div class="Module" key={track.id}>
            <div class="Module-body">
              <h5 class="Module-title"><strong>{track.title}</strong></h5>
              <img className="Module-img" src={Image} alt=""/>
              <div  class="Module-text">
              <a href="/"><p>
                {track.content}
              </p> <p> (Click to open the video)</p></a>
             
              </div>
              <img className="Module-img" src={Image} alt=""/>
              <div className='Module-circle'></div>
              <img className="Module-img" src={Image} alt=""/>
            </div>
            
          </div>
        );
      })}
    </div>
    </>
  )
}

export default index