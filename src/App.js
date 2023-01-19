import "./App.css";
import Request from "./data/HttpRequest";
import MusicRequest from "./data/MusicRequest";

function App() {
  const test = new Request();
  const test2 = new MusicRequest();
  test2.sendRequest("beyonce", "song", "music", "genreIndex", 10);
  // test.createRequest("https://itunes.apple.com/search?term=beyonce+crazy");
  return (
    <div className="App">
      <h1>Mindset App</h1>
    </div>
  );
}

export default App;
