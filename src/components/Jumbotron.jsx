import React from "react";
import "../stylesheets/Jumbotron.css";

export const Jumbotron = () => {
  const imgSrc =
    "https://ca-times.brightspotcdn.com/dims4/default/bb60523/2147483647/strip/true/crop/2000x1333+0+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2Fb7%2F99beae9a4be0bbced1487b04b619%2Fla-hm-nyny-mental-health.jpg";
  return (
    <div className="jumbotron">
      <img src={imgSrc} alt="mental-health" />
    </div>
  );
};
