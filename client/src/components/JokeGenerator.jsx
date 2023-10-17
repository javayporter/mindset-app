import "../stylesheets/JokeGenerator.css";
import { Button } from "react-bootstrap";

const JokeGenerator = () => {
  const dadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse.joke;
  };
  const displayJoke = async () => {
    const textArea = document.querySelector(".joke");
    textArea.textContent = await dadJokes();
  };

  return (
    <div className="joke-gen">
      <text className="joke">{() => dadJokes()}</text>
      <br />
      <Button variant="light" onClick={() => displayJoke()}>
        Click to Laugh
      </Button>
    </div>
  );
};

export default JokeGenerator;
