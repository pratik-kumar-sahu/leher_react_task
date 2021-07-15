import React, { useState } from "react";
import images from "../assets/images";
import "./styles.scss";

export function BottomContainer() {
  const { forward, backward, play_song, pause, like } = images;

  const [play, setPlay] = useState(false);

  return (
    <div className="bottomContainer">
      <div className="bottomContainer__currentMusic">
        <img
          src="https://image.tmdb.org/t/p/w1280/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
          alt="music-poster"
        />
        <div className="bottomContainer__currentMusic-info">
          <h4>One Step Beyond</h4>
          <p>Madness</p>
        </div>
        <img
          style={{
            width: "1.5rem",
            height: "1.5rem",
            margin: "0 0 0 1.5rem",
          }}
          src={like.src}
          alt={like.alt}
        />
      </div>

      <div className="bottomContainer__controls">
        <div className="bottomContainer__controls-icons">
          <img
            className="bottomContainer__controls-icons--small"
            src={backward.src}
            alt={backward.alt}
          />
          <img
            className="bottomContainer__controls-icons--big"
            src={play ? pause.src : play_song.src}
            alt={play ? pause.alt : play_song.alt}
            onClick={() => setPlay(!play)}
          />
          <img
            className="bottomContainer__controls-icons--small"
            src={forward.src}
            alt={forward.alt}
          />
        </div>
        <div className="bottomContainer__controls-progress">
          <p>01:50</p>
          <div className="bottomContainer__controls-progress--bar"></div>
          <p>05:20</p>
        </div>
      </div>

      <div className="bottomContainer__empty"></div>
    </div>
  );
}
