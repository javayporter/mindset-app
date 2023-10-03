import React from "react";
import { Button } from "react-bootstrap";
import "../stylesheets/Jumbotron.css";
import mindImage from "../images/purple_mind_big.jpeg";
import "../stylesheets/Jumbotron.css";

//Using this as Hero Section will rename files
export const Jumbotron = () => {
  const heading1 = "Welcome to the";
  const description =
    "The mindset app was designed to help you get through your day. Take care of your mind";
  const heading2 = "Mindset App";
  return (
    <div className="hero">
      <div className="left">
        <h1>
          <span>{heading1}</span>
          <br />
          <span>{heading2}</span>
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
    // <div className="jumbotron-cus" id="jumbo-comp">
    //   <img src={mindImage} width="100px" height="400px" alt="mind flowers" />
    // </div>
  );
};
