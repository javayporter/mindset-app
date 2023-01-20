import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicRequest from "./data/MusicRequest";
import { useEffect, useState } from "react";
import HttpRequest from "./data/HttpRequest";
import MusicCard from "./componets/MusicCard";
import NavBar from "./componets/NavBar";

const App = () => {
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
    <div className="App">
      <div className="navbar-cus">
        <NavBar />
      </div>
      <div className="container-cus">
        {data.length > 0 ? (
          <div className="sub-container">
            {data.map((item) => (
              <MusicCard info={item} />
            ))}
            {console.log("data from App.js", data)}
          </div>
        ) : (
          console.log("loading data...")
        )}
      </div>
      {/* <div>
        {

        }
      </div> */}
    </div>
  );
};

export default App;
