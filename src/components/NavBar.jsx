import React, { useState } from "react";
import "../style/HomePage/NavBar.css";
import yrFilmProductionLogo from "../assets/logo/yrfilmproduction.jpg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Contact Information */}
      <div className="navbar-top">
        <div className="navbar-contact">
          <p>yrflimproduction18@gmail.com</p>
          <p>+91 73854 75831 / (02462) 355 419</p>
        </div>
      </div>

      {/* Navigation Links and Mobile Menu Toggle */}
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img
            src={yrFilmProductionLogo}
            alt="yrFilmProductionLogo"
            style={{ height: "50px" }}
          />
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#shorts">Shorts</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
