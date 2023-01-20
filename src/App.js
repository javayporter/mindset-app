import "./App.css";
import Request from "./data/HttpRequest";
import MusicRequest from "./data/MusicRequest";
import { useEffect } from "react";

const App = () => {
  const musicRequest = new MusicRequest();
  useEffect(() => {
    musicRequest.sendRequest("beyonce", "song", "music", "genreIndex", 10);
  }, []);

  return (
    <div className="App">
      <h1>Mindset App</h1>
    </div>
  );
};

export default App;
