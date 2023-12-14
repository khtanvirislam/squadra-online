import React from "react";
import { HeroText } from "./HeroText";
import { HeroImg } from "./HeroImg";

export const Hero = () => {
  return (
    <div className="flex">
      <HeroText></HeroText>
      <HeroImg></HeroImg>
    </div>
  );
};
