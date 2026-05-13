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
        <a href="#home" className="text">Home</a>
        <a href="#impact" className="text">Impact</a>
        <a href="#stories" className="text">Stories</a>
        <a href="#contact" className="text">Contact</a>
      </div>
      <div className="nav-buttons">
        <a href="/register" className="btn">Sign Up</a>
        <a href="/login" className="btn">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;