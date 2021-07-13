import React from "react";
import images from "../assets/images";
import "./styles.scss";

export function TopContainer() {
  const { prev, next, user } = images;

  return (
    <div className="topContainer">
      <div className="topContainer__icons">
        <img
          className="topContainer__icons-icon"
          src={prev.src}
          alt={prev.alt}
        />
        <img
          className="topContainer__icons-icon"
          src={next.src}
          alt={next.alt}
        />
      </div>
      <div className="topContainer__profile">
        <img src={user.src} alt={user.alt} />
        <div>Arthur Guiller Ha...</div>
      </div>
    </div>
  );
}
