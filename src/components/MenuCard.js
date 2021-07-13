import React from "react";
import images from "../assets/images";
import "./styles.scss";

function MenuCard() {
  const { spotify } = images;

  return (
    <div className="menu">
      <img src={spotify.src} alt={spotify.alt} />
      <h3>Home</h3>
    </div>
  );
}

export default MenuCard;
