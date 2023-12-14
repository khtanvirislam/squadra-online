import React from "react";
import { BusinessButton } from "./BusinessButton";

export const BusinessText = () => {
  return (
    <div className="bg-slate-800 rounded-2xl px-4  py-4 md:py-10">
      <div className="">
        <h2 className="text-3xl md:max-w-md font-medium lg:max-w-lg mt-4">
          You drive the Business{" "}
          <span className="text-5xl text-green-400 font-bold ">Forward,</span>
        </h2>
        <h2 className="text-3xl md:max-w-md font-medium lg:max-w-lg mt-4">
          We'll streamline it with expert{" "}
          <span className="text-5xl text-green-400 font-bold">
            AI and Automation!
          </span>
        </h2>
        <p className="max-w-sm md:max-w-md lg:max-w-lg text-justify py-10  text-base">
          Opting for the right AI and automation tools is crucial for digital
          businesses, playing a key role in enhancing operational efficiency,
          fostering growth, and optimizing expenses, especially given the
          extensive variety of solutions available in the market.
        </p>
      </div>
      <BusinessButton></BusinessButton>
    </div>
  );
};
