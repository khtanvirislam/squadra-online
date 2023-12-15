import React from "react";
import { BusinessText } from "./BusinessText";
import { BusinessReward } from "./BusinessReward";
import { BusinessButton } from "./BusinessButton";

export const Business = () => {
  return (
    <div>
      <div
        className=" py-5 md:pt-20
      bg-slate-800 rounded-2xl px-5 flex flex-col lg:flex-row justify-around items-center"
      >
        <BusinessText></BusinessText>
        <BusinessReward></BusinessReward>
      </div>
      <BusinessButton></BusinessButton>
    </div>
  );
};
