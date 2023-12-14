import React from "react";
import { GetStarted } from "../../Body/GetStarted/GetStarted";

export const HeroText = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-1 lg:max-w-2xl lg:py-5">
        {/* content */}
        <div className="md:mr-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            Transform <br />
            <span className="text-4xl md:text-6xl  text-teal-400">
              Your Business!
            </span>
          </h1>
          <p className="my-6 bg-gradient-to-br from-teal-900 to-slate-700 text-white px-4 py-3 rounded text-xl max-w-[350px] font-medium md:max-w-md lg:max-w-lg">
            Elevate Your Enterprise with <br /> State-of-the-Art AI and
            Automation Solutions.
          </p>
        </div>

        {/* get started */}
        <div className="sm:flex hidden md:mr-7 ">
          <GetStarted></GetStarted>
        </div>
      </div>
      <p className="justify-center px-2 max-w-sm md:max-w-md lg:max-w-lg text-base">
        Our experienced team utilizes a tailored approach to pinpoint the ideal
        AI and automation solutions for your business, emphasizing enhanced
        efficiency and cost-effectiveness.
      </p>
    </div>
  );
};
