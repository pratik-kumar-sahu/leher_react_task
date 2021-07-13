import React from "react";
import ShowCase from "../components/ShowCase";
import "./styles.scss";

export function MainContainer() {
  return (
    <div className="mainContainer">
      <ShowCase />
      <ShowCase />
      <ShowCase />
    </div>
  );
}
