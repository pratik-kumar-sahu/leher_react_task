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
        <div className="showcase__header-content">
          <h5>SEE ALL</h5>
        </div>
      </div>
      <div className="showcase__items">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
}

export default ShowCase;
