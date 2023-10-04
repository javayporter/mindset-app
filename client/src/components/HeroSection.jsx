import React from "react";
import { Button } from "react-bootstrap";

import mindImage from "../images/purple_mind_big.jpeg";

import "../stylesheets/HeroSection.css";

//Using this as Hero Section will rename files
export const HeroSection = () => {
  const heading1 = "Welcome to the";
  const heading2 = "Mindset App";
  const description =
    "The mindset app was designed to help you get through your day. Take care of your mind.";

  return (
    <div className="hero">
      <div className="left">
        <h1>
          <span>{heading1}</span>
          <br />
          <span class="special-heading">{heading2}</span>
        </h1>
        <p class="app-description">{description}</p>
        <div className="buttons">
          <Button variant="light">Learn More</Button>
          <Button className="subscribe-btn" variant="success">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={mindImage} alt="mind flowers" />
      </div>
    </div>
  );
};
