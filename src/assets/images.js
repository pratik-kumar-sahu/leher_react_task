const path = process.env.PUBLIC_URL + "/images";

const images = {
  prev: { src: `${path}/prev.png`, alt: "go-backward" },
  next: { src: `${path}/next.png`, alt: "go-forward" },
  spotify: { src: `${path}/spotify.png`, alt: "spotify-logo" },
  user: { src: `${path}/user.jpg`, alt: "user-pic" },
  play: { src: `${path}/play.png`, alt: "play-button" },
  home: { src: `${path}/home.png`, alt: "home-icon" },
  library: { src: `${path}/library.png`, alt: "library-icon" },
  like: { src: `${path}/like.png`, alt: "like-icon" },
  plus: { src: `${path}/plus.png`, alt: "plus-icon" },
  search: { src: `${path}/search.png`, alt: "search-icon" },
};

export default images;
