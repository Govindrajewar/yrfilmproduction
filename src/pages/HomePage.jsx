import React from "react";
import Posters from "../components/Posters";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <div className="HomePage">
      YR FILM PRODUCTION
      <Posters />
      <AboutUs />
      <Projects />
    </div>
  );
}

export default HomePage;
