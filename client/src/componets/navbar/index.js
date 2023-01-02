import { Button } from 'bootstrap';
import {Link} from 'react-router-dom' ;
import React , {Component} from 'react'; 
import "./navbar.css" ;

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '"#000000'}}>
            <div className="container-fluid">
              {/* <a className="navbar-brand fw-bold" href="#">EDTECH</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/account/tutorial" className="nav-link active" aria-current="page" >Tutorials</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Resources</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Community
                    </a>
                    {/* <div className="dropdown-menu">
                      <ul>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
          
                      </ul>
                      <ul>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
          
                      </ul>
                      <ul>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
          
                      </ul>
                    </div> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">P2P Mock</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">Competitions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">Career Roadmap</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                <button type="button" class="btn btn-primary">Sign In</button>
              </div>
            </div>
          </nav>



        )
    }
}

export default NavBar ;