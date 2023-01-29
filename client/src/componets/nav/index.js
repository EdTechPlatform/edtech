import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/const/actionsTypes";
import './nav.css'

function Nav(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usercred, setUserCred] = useState([]);

  const userdeatils = async () => {
    const response = await fetch("https://ed-tech-service-backend.onrender.com/users/getuser", {
      method: "GET",
      headers: {
        jToken: localStorage.getItem("jToken"),
      },
    });
    const json = await response.json();
    // console.log({ userdata: json });
    setUserCred(json);
  };

  useEffect(() => {
    userdeatils();
  }, []);

  function handleLogOut(e) {
    e.preventDefault();

    dispatch({ type: LOGOUT });
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/tutorial"
                className="nav-link"
                aria-current="page"
              >
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                P2P_Mock
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                Competitions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account/testroute"
                className="nav-link"
                aria-current="page"
              >
                Career_Roadmap
              </Link>
            </li>
            </ul>
          </div>
          <div 
          className=" d-flex flex-row-reverse me-4"
          id="#navbarNavDropdown"
        >
          {localStorage.getItem("jToken") ? (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{background:"rgb(24 106 255)", paddingLeft:"20px", paddingRight:"20px", borderRadius:"50px"}}
              >
                Hello {usercred.firstName}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/account/profile"
                    style={{color:"black"}}
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
                    style={{color:"black"}}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="nav-item" style={{background:"rgb(24 106 255)", paddingLeft:"10px", paddingRight:"10px", borderRadius:"50px"}}>
              <Link className="nav-link" to="/account/login">
                Sign in
              </Link>
            </button>
          )}
        </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Nav);
