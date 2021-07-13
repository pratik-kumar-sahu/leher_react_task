import React from "react";
import images from "../assets/images";
import MenuCard from "../components/MenuCard";
import "./styles.scss";

export function LeftContainer() {
  const { spotify } = images;
  const playlists = [
    "Travelling Music 2021 🚗",
    "Happy Mood Songs 2021 😋",
    "Bass House Club 2021 🎵",
    "WorkinOut Playlist",
    "Breakin A Sweat Workout",
    "Gaming Playlist | Electronica 🎮",
    "Best of Bollywood 2020 💖",
    "This is Daddy Yankee",
  ];

  return (
    <div className="leftContainer">
      <div className="leftContainer__logo">
        <img src={spotify.src} alt={spotify.alt} />
        <p>Spotify</p>
      </div>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <p className="leftContainer__heading">PLAYLISTS</p>
      <MenuCard />
      <div className="leftContainer__playlist">
        {playlists.map((item, i) => (
          <p key={i}>
            {item.length > 20 ? item.substring(0, 20) + "..." : item}
          </p>
        ))}
      </div>
    </div>
  );
}
