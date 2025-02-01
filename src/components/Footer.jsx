import React from "react";
import "../style/HomePage/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Address Section */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            YR Studios, Yugantar Bhavan, Vyankateshwara Nagar, Ring Road, Near
            Kabra Nagar, Nanded, Maharashtra, India, 431605.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: yrflimproduction18@gmail.com</p>
          <p>Phone: (+91) 2462 355 419</p>
          <p>WhatsApp: (+91) 73854 75831</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>All Rights Reserved</p>
        <p>copyright: 2025 @ Y R Film Production</p>
      </div>
    </footer>
  );
}

export default Footer;
