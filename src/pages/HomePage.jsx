import React, { useState, useEffect } from "react";
import "../style/HomePage/HomePage.css";
import Posters from "../components/Posters";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function HomePage() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HomePage">
      <NavBar/>
      {/* <Posters />
      <AboutUs />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
      {showButton && (
        <button type="button" className="up-btn" onClick={scrollToTop}>
          ^
        </button>
      )} */}
    </div>
  );
}

export default HomePage;
