import React from "react";
import ShowCase from "../components/ShowCase";
import "./styles.scss";

export function MainContainer() {
  return (
    <div className="mainContainer">
      {[1, 2, 3, 4, 5].map((i) => (
        <ShowCase key={i} />
      ))}
    </div>
  );
}
