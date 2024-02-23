import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Flights
          </a>
        </li>
        <li className="nav-item">
          <a href="/register" className="nav-link">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
