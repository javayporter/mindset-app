import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicRequest from "./data/MusicRequest";
import { useEffect, useState } from "react";
import HttpRequest from "./data/HttpRequest";
import MusicCard from "./componets/MusicCard";
import NavBar from "./componets/NavBar";

const App = () => {
  const httpRequest = new HttpRequest();
  const musicRequest = new MusicRequest();
  // const [data, setData] = useState([]);

  useEffect(() => {
    musicRequest.sendRequest("beyonce", "song", "music", "genreIndex", 10);
  }, []);

  //console.log(httpRequest.updateSuccess());

  return (
    <div className="App">
      <div classname="navbar">
        <NavBar />
      </div>
      <div className="container-cus">
        <MusicCard />
      </div>
    </div>
  );
};

export default App;
