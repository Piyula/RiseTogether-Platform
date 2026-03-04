import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">RiseTogether</h1>
      <div className="nav-buttons">
        <Link to="/register" className="btn">Sign Up</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;