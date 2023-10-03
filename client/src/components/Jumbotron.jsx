import React from "react";
import "../stylesheets/Jumbotron.css";
import mindImage from "../images/purple_mind_big.jpeg";
import "../stylesheets/Jumbotron.css";

export const Jumbotron = () => {
  return (
    <div className="jumbotron-cus" id="jumbo-comp">
      <img src={mindImage} width="100px" height="400px" alt="mind flowers" />
    </div>
  );
};
