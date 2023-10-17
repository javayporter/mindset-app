import { useState } from "react";
import MusicCard from "../components/MusicCard";
import "../stylesheets/MusicCard.css";
import { SearchBar } from "../components/SearchBar";
import { Button } from "react-bootstrap";

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

  const runSearch = () => {
    const searchBar = document.querySelector(".search-bar");
    let searchTerm = searchBar.value;
    getItunesData(buildUrl(searchTerm));
  };

  return (
    <div>
      <div className="music-search">
        <SearchBar searchFunc={() => runSearch()} />
      </div>
      <div className="music-container">
        {data.length > 0 ? (
          <div className="itunes-data">
            {data.map((item) => (
              <MusicCard info={item} key={item.trackId} />
            ))}
          </div>
        ) : (
          console.log("loading data...")
        )}
      </div>
    </div>
  );
};
