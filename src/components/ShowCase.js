import React from "react";
import MusicCard from "../components/MusicCard";
import "./styles.scss";

function ShowCase() {
  return (
    <div className="showcase">
      <div className="showcase__header">
        <div className="showcase__header-title">
          <h2>Made for you</h2>
          <p>Get better recommendations the more you listen</p>
        </div>
        <h5>SEE ALL</h5>
      </div>
      <div className="showcase__items">
        {[1, 2, 3, 4, 5].map((i) => (
          <MusicCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default ShowCase;
