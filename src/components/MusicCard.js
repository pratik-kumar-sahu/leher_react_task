import React from "react";
import images from "../assets/images";
import "./styles.scss";

function MusicCard() {
  const { user, play } = images;

  return (
    <div className="card">
      <img className="card__image" src={user.src} alt={user.alt} />
      <img className="card__playBtn" src={play.src} alt={play.alt} />
      <div className="card__content">
        <p>Discover Weekly</p>
        <p>Your weekly mixtape of fresh music. Enjoy new...</p>
      </div>
    </div>
  );
}

export default MusicCard;
