import React from "react";
import Posters from "../components/Posters";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Services from "../components/Services";

function HomePage() {
  return (
    <div className="HomePage">
      <Posters />
      <AboutUs />
      <Projects />
      <Services />
    </div>
  );
}

export default HomePage;
