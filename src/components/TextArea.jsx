import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div className="text-area-bg">
      <div className="text-area">
        <h1>{text.heading}</h1>
        <h4>{text.description}</h4>
        <p>{text.text}</p>
      </div>
    </div>
  );
};
