import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './nav.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const navigate = useNavigate();

  const [usercred, setUserCred] = useState([]);

  const userdeatils = async () => {
    const response = await fetch("https://ed-tech-service-backend.onrender.com/admin/getadmin", {
      method: "GET",
      headers: {
        adminToken: localStorage.getItem("adminToken"),
      },
    });
    const json = await response.json();
    setUserCred(json);
  };

  useEffect(() => {
    userdeatils();
  }, []);

  console.log(usercred);

  const handleLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("adminToken");
    navigate("/");

  }
  const validation = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      toast.warning("Do Sign In first", {
        position: "top-center",
      });
    }, 1);
    navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EdTech
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {localStorage.getItem("adminToken") ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink exact activeClassName="navbar-link--active" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/account/tutorial"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="navbar-link--active"
                  >
                    Tutorials
                  </NavLink>
                </li>
                <li className="nav-item">
                 <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    Resources
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    Community
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    P2P_Mock
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    Competitions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    className="nav-link"
                    aria-current="page"
                  >
                    Career_Roadmap
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink activeClassName="navbar-link--active" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/tutorial"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Tutorials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Resources
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Community
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    P2P_Mock
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Competitions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="navbar-link--active"
                    to="/account/testroute"
                    onClick={validation}
                    className="nav-link"
                    aria-current="page"
                  >
                    Career_Roadmap
                  </NavLink>
                </li>
              </ul>
            )}

          </div>
          <div
            className=" d-flex flex-row-reverse me-4"
            id="#navbarNavDropdown"
          >
            {localStorage.getItem("adminToken") ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: "rgb(24 106 255)", paddingLeft: "20px", paddingRight: "20px", borderRadius: "50px" }}
                >
                  Hello {usercred.useremail}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/admin/profile"
                      style={{ color: "black" }}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogOut}
                      className="nav-link"
                      aria-current="page"
                      to="/"
                      style={{ color: "black" }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="nav-item" style={{ background: "rgb(24 106 255)", paddingLeft: "10px", paddingRight: "10px", borderRadius: "50px" }}>
                <Link className="nav-link" to="/admin/login">
                  Sign in
                </Link>
              </button>
            )}
          </div>
          <ToastContainer />
        </div>
      </nav>
    </>
  );
}


export default Nav;
