import React from "react";
import "../style/HomePage/Posters.css";
import horpal from "../assets/poster/horpal.jpg";
import paisa_paisa from "../assets/poster/paisa_paisa.jpg";

function Posters() {
  return (
    <div className="posters">
      <img src={horpal} alt="horpal_music_poster" className="poster-image" />
      <img src={paisa_paisa} alt="paisa_paisa" className="poster-image second-image" />
    </div>
  );
}

export default Posters;
