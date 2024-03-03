import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const userData = localStorage.getItem("userData");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  const handleProfile = () => {
    window.location.href = "/profile";
  };

  return (
    <div className="flex">
      <nav className="navbar">
        <ul className="navbar_nav">
          <li className="nav-item">
            <a href="/landing" className="nav-link">
              Flights
            </a>
          </li>
          {user ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome, {user.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
                <button className="dropdown-item" onClick={handleProfile}>
                  profile
                </button>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
