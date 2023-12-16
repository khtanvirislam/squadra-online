import React from "react";
import { BusinessButton } from "../Business/BusinessButton";

export const CTA = () => {
  return (
    <div className="py-10 md:py-20 from-gray-800 to-gray-950 hover:bg-gray-900 rounded-xl md:flex justify-center text-center md:text-start gap-12 mt-5">
      <div>
        <h2 className="text-2xl md:text-5xl font-bold">
          Let’s try our service now!
        </h2>
        <p className="text-lg mt-5 mb-5">
          Everything you need to accept ai grow your business anywhere on the
          planet.
        </p>
      </div>
      <div>
        <BusinessButton></BusinessButton>
      </div>
    </div>
  );
};
