import { useState } from "react";
import MusicCard from "../components/MusicCard";

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

  getItunesData(buildUrl("beyonce"));

  return (
    <div>
      <div className="">
        {data.length > 0 ? (
          <div className="">
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
