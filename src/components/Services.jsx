import React from "react";
import "../style/HomePage/Services.css";

// icons
import adfilm from "../assets/icons/adFillm.png";
import animationDesigning from "../assets/icons/animationDesigning.png";
import documentryFilm from "../assets/icons/documentryFilm.png";
import featureFilm from "../assets/icons/featureFilm.jpeg";
import graphicsDesigning from "../assets/icons/graphicsDesigning.png";
import shortFilm from "../assets/icons/shortFilm.png";
import telecasting from "../assets/icons/telecasting.png";
import vfxDesigning from "../assets/icons/vfxDesigning.png";
import videography from "../assets/icons/videography.png";

const services = [
  {
    id: 1,
    title: "Feature Film",
    description: "We record end to end Feature Film.",
    icon: featureFilm,
  },
  {
    id: 2,
    title: "Short Film",
    description: "Idea Creation, Shoot Short Films, and Launch.",
    icon: shortFilm,
  },
  {
    id: 3,
    title: "Documentary Film",
    description: "Government, Life, School Documentary.",
    icon: documentryFilm,
  },
  {
    id: 4,
    title: "Ad Film",
    description: "Online, Video, Social Media Advertise.",
    icon: adfilm,
  },
  {
    id: 5,
    title: "VFX Designing",
    description: "VFX.",
    icon: vfxDesigning,
  },
  {
    id: 6,
    title: "Animation Designing",
    description: "Animation Designing.",
    icon: animationDesigning,
  },
  {
    id: 7,
    title: "Live Streaming",
    description: "Make your events live with us.",
    icon: telecasting,
  },
  {
    id: 8,
    title: "Videography & Photography",
    description: "Indoor, Outdoor, Functional, Model Photoshoots.",
    icon: videography,
  },
  {
    id: 9,
    title: "Graphics Designing",
    description: "Poster, Logo, Banner, Brochure Making.",
    icon: graphicsDesigning,
  },
];

function Service() {
  return (
    <div className="Services">
      <div className="services-header">
        <h2 className="services-heading">--- Services ---</h2>
        <h1 className="services-description">
          The Major{" "}
          <span style={{ color: "orangered", fontStyle: "italic" }}>
            PRODUCTION
          </span>{" "}
          Services That We Are Offering To You
        </h1>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              className="service-icon"
              src={service.icon}
              alt={service.title}
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
