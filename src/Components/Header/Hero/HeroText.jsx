import React from "react";
import { GetStarted } from "../../Body/GetStarted/GetStarted";

export const HeroText = () => {
  return (
    <div className="flex-1 mt-5 md:mt-10">
      <div className="flex flex-1 lg:max-w-2xl">
        {/* content */}
        <div className="text-center md:text-start px-4 md:px-8 py-4 md:py-8">
          <h1 className="text-3xl md:text-6xl font-bold">
            Transform <br />
            <span className="text-4xl md:text-7xl text-teal-400">
              Your Business!
            </span>
          </h1>
          <p className="my-6 md:mt-10 bg-gradient-to-br from-teal-900 to-slate-700 text-white px-4 py-3 md:px-8 md:py-6 rounded text-xl max-w-[350px] font-medium md:max-w-md lg:max-w-lg ">
            Elevate Your Enterprise with <br /> State-of-the-Art AI and
            Automation Solutions.
          </p>
        </div>
      </div>
      <p className="text-start px-4 md:px-8 max-w-sm md:max-w-md lg:max-w-lg text-base">
        Our experienced team utilizes a tailored approach to pinpoint the ideal
        AI and automation solutions for your business, emphasizing enhanced
        efficiency and cost-effectiveness.
      </p>
      {/* get started */}
      <div className="sm:flex justify-center hidden mt-10">
        <GetStarted></GetStarted>
      </div>
    </div>
  );
};
