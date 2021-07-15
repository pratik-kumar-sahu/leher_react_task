import React from "react";
import images from "../assets/images";
import "./styles.scss";

function MusicCard({ item }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const { user, play } = images;

  return (
    <div className="card">
      <img
        className="card__image"
        src={IMAGE_PATH + item.poster_path}
        alt={user.alt}
      />
      <img className="card__playBtn" src={play.src} alt={play.alt} />
      <div className="card__content">
        <p>
          {item.title.length > 17
            ? item.title.substring(0, 17) + "..."
            : item.title}
        </p>
        <p>{item.overview.substring(0, 43)}</p>
      </div>
    </div>
  );
}

export default MusicCard;
