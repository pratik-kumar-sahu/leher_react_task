const path = process.env.PUBLIC_URL + "/images";

const images = {
  prev: { src: `${path}/prev.png`, alt: "go-backward" },
  next: { src: `${path}/next.png`, alt: "go-forward" },
  spotify: { src: `${path}/spotify.png`, alt: "spotify-logo" },
  user: { src: `${path}/user.jpg`, alt: "user-pic" },
  play: { src: `${path}/play.png`, alt: "play-button" },
};

export default images;
