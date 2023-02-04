import { useEffect, useState } from "react";
import MusicCard from "../components/MusicCard";
import QuoteComp from "../components/QuoteComp";

export const Music = () => {
  const [data, setData] = useState([]);
  const testURL = "https://itunes.apple.com/search?term=beyonce";
  const createRequest = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    createRequest(testURL);
  }, []);
  return (
    <div>
      <QuoteComp />
      <div className="container-cus">
        {data.length > 0 ? (
          <div className="sub-container">
            {data.map((item) => (
              <MusicCard info={item} key={item.trackId} />
            ))}
            {console.log("data from App.js", data)}
          </div>
        ) : (
          console.log("loading data...")
        )}
      </div>
    </div>
  );
};
