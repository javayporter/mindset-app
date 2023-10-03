import React from "react";
import "../stylesheets/Jumbotron.css";
import mindImage from "../images/purple_mind_big.jpeg";
import "../stylesheets/Jumbotron.css";

//Using this as Hero Section will rename files
export const Jumbotron = () => {
  const heading1 = "Welcome to";
  const description =
    "The mindset app was designed to help you get through your day. Take care of your mind";
  const heading2 = "the Mindset App";
  return (
    <div className="hero">
      <div className="left">
        <h1>
          <span>{heading1}</span>
          <br />
          <span>{heading2}</span>
        </h1>
        <p>{description}</p>
        <button>Learn More</button>
        <button>Subscribe</button>
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
