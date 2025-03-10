import React from "react";
import logoSpotify from "../assets/logo/spotify-logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logoSpotify} alt="logo do Spotify" className="logo" />
        </Link>

        <ul className="navbar-items">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Music</li>
          <li className="navbar-item">Events</li>
          <li className="navbar-item">News</li>
        </ul>

        <button className="signin-btn">Log In</button>
      </div>
    </div>
); };

export default Header;