//Our First Component
//We need react function based component: type rfc and press enter
// import React ,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// export default function NavBar({title,About}) //Alternate method
export default function NavBar(props) {

  return (
    <nav  className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
      TextPlay.com
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link ">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${(props.mode==='dark'?'light':'dark')}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
            /> Dark Mode
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
};

NavBar.defaultProps = {
  title: "My Tilte", //if we forget to pass title value from app.js, then react will use this by default values
  About: "About Us",
};

