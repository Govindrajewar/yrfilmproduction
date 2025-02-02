import React, { useState } from "react";
import "../style/HomePage/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="ContactForm">
      <div className="contact-form-container">
        <h2>Get In Touch</h2>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name in one row */}
          <div className="form-row">
            <div className="form-group">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone Number and Email in one row */}
          <div className="form-row">
            <div className="form-group">
              {/* <label htmlFor="phoneNumber">Your Number</label> */}
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Your Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Message field */}
          <div className="form-group">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-btn">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
