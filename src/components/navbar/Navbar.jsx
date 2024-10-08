import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="section-left">
          <div className="nav-logo">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://framerusercontent.com/images/NLWM7tBC0ccG8h1Hfo2iMj0WKM.svg"
              alt=""
            />
            <h3>
              Deserve Studio <span style={{ color: "gray" }}>|</span>
            </h3>
          </div>
          <div className="nav-menu">
            <Link to="aboutus">
              {" "}
              <p>About Us</p>
            </Link>
            <p>Success Stories</p>
            <p>Shoutout</p>
            <p>Carrers</p>
            <p>Follow on X</p>
          </div>
        </div>
        <div className="nav-cta">
          <button className="cta-primary">Book a Call</button>
          <button className="cta-secondary">Work with us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
