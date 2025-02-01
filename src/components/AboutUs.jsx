import React from "react";
import "../style/HomePage/AboutUs.css";
import aboutUs from "../assets/aboutUs.jpeg";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="details">
        <h4>--- About Us ---</h4>
        <h1>
          We Are Offering The Best{" "}
          <span style={{ color: "orangered", fontStyle: "italic" }}>
            PRODUCTIONS
          </span>{" "}
          Services For You
        </h1>
        <p>
          YR Film Production has state of the art integrated studio for making
          pre-production to post-production projects. The studio meets
          international standards. We provide all audio related services like
          voiceover, music recording, dubbing, etc. Live programs can also be
          run at our editing studio. We're proud to be in your service since
          2019.
        </p>
        <button type="button" className="contact-us-btn">
          Contact Us
        </button>
      </div>
      <div className="aboutUs-img">
        <img
          src={aboutUs}
          alt="about Us"
          style={{ height: "100%", width: "40vw" }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
