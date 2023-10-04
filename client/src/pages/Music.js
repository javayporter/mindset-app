import { useState } from "react";
import MusicCard from "../components/MusicCard";
import "../stylesheets/MusicCard.css";

export const Music = () => {
  const [data, setData] = useState([]);
  const buildUrl = (searchTerm) => {
    const url = `https://itunes.apple.com/search?term=${searchTerm}`;
    return url;
  };
  const getItunesData = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    const resultData = jsonData["results"];
    setData(resultData);
    //return resultData;
  };

  // used for dev env only
  const returnHeight = () => {
    const navBar = document.querySelector(".itunes-data");
    const navHeight = navBar.offsetHeight;
    console.log(`${navHeight}px`);
  };

  getItunesData(buildUrl("beyonce"));

  return (
    <div>
      <button onClick={() => returnHeight()}>get height</button>
      <div className="music-container">
        {data.length > 0 ? (
          <div className="itunes-data">
            {data.map((item) => (
              <MusicCard className="testing" info={item} key={item.trackId} />
            ))}
          </div>
        ) : (
          console.log("loading data...")
        )}
      </div>
    </div>
  );
};
