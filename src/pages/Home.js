import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { TextArea } from "../components/TextArea";

export const Home = () => {
  const heading = "Welcome to the Mindset App";
  const description =
    "The mindset app was designed to help you get through your day.";
  const text = "Take care of your mind";

  const textContent = {
    heading: heading,
    description: description,
    text: text,
  };
  return (
    <div>
      <Jumbotron />
      <TextArea text={textContent} />
    </div>
  );
};
