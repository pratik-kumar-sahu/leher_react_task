import React from "react";
import "./styles.scss";

function MenuCard({ icon, title, bg }) {
  return (
    <div style={{ backgroundColor: `${bg ? bg : "inherit"}` }} className="menu">
      <img src={icon.src} alt={icon.alt} />
      <h3>{title}</h3>
    </div>
  );
}

export default MenuCard;
