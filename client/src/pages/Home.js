import React from "react";
import { HeroSection } from "../components/HeroSection";
import JokeGenerator from "../components/JokeGenerator";

export const Home = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
        <JokeGenerator />
      </div>
    </div>
  );
};
