import React from "react";
import "../style/HomePage/Projects.css";
import sample1 from "../assets/project/sample1.jpg";

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-img">
        <img
          src={sample1}
          alt="about Us"
          // style={{ height: "50%", width: "40vw" }}
        />
      </div>
      <div className="details">
        <h4>--- Projects ---</h4>
        <h1>
          Some Outstanding{" "}
          <span style={{ color: "orangered", fontStyle: "italic" }}>
            Snippet
          </span>{" "}
          Of Our Recent Work
        </h1>
      </div>
    </div>
  );
}

export default Projects;
