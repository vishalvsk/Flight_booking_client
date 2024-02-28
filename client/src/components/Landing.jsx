// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Flight Booking</h1>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Find Your Next Adventure</h2>
          <p className="hero-text">
            Search and book flights to destinations around the world.
          </p>
          <Link to="/register" className="btn btn-primary">
            <b> Get Started</b>
          </Link>
        </div>
      </section>
      <footer className="footer">
        <p>2024 Flight Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
