import React from "react";
import { BusinessText } from "./BusinessText";
import { BusinessReward } from "./BusinessReward";

export const Business = () => {
  return (
    <div className="py-10 md:py-20">
      <BusinessText></BusinessText>
      <BusinessReward></BusinessReward>
    </div>
  );
};
