import React from "react";
import MusicCard from "../components/MusicCard";
import "./styles.scss";

function ShowCase({ state, headerInfos }) {
  return (
    <div className="showcase">
      <div className="showcase__header">
        <div className="showcase__header-title">
          <h2>{headerInfos.title}</h2>
          <p>{headerInfos.info}</p>
        </div>
        <h5>SEE ALL</h5>
      </div>
      <div className="showcase__items">
        {state.map((item, i) => (
          <MusicCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShowCase;
