import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowCase from "../components/ShowCase";
import { API_KEY } from "../keys";
import "./styles.scss";

export function MainContainer() {
  const [state, setState] = useState([]);

  const headerInfos = [
    {
      title: "Made for you",
      info: "Get better recommendations the more you listen",
    },
    {
      title: "Recently Played",
      info: "Recent played songs with recommendations",
    },
    {
      title: "For Your Listening Pleasure!",
      info: "Listen as per your mood",
    },
    {
      title: "English New Releases",
      info: "New hollywood hits based on your liked songs",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      });
      setState([
        results.slice(0, 5),
        results.slice(5, 10),
        results.slice(10, 15),
        results.slice(15, 20),
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className="mainContainer">
      {state.map((item, i) => (
        <ShowCase key={i} state={item} headerInfos={headerInfos[i]} />
      ))}
    </div>
  );
}
