import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-group">
        <img src="/logo2.png" alt="RiseTogether Logo" className="logo" />
        <h1 className="logo-title">RiseTogether</h1>
      </div>
      <div className="short-text">
        <Link to="/Home" className="text">Home</Link>
        <Link to="/Impact" className="text">Impact</Link>
        <Link to="/Stories" className="text">Stories</Link>
        <Link to="/Contact" className="text">Contact</Link>
      </div>
      <div className="nav-buttons">
        <Link to="/register" className="btn">Sign Up</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;