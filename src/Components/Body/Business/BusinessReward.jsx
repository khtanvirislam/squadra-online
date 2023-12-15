import React from "react";
import { FaFastForward } from "react-icons/fa";
import { BiExitFullscreen } from "react-icons/bi";

export const BusinessReward = () => {
  return (
    <div className="max-w-[400px]">
      {/* icon 1 */}
      <div className="flex justify-center items-center gap-5 mb-4 hover:bg-slate-700 p-4 rounded-lg">
        <div className="text-4xl">
          <span>
            <FaFastForward />
          </span>
        </div>
        <div>
          <h2 className="text-white text-xl font-bold">Rewards</h2>
          <p className="mt-3">
            The best credit cards offer some tantalizing combinations of
            promotions and prizes
          </p>
        </div>
      </div>
      {/* icon 2 */}
      <div className="flex justify-center items-center gap-5 mb-4 hover:bg-slate-700 p-4 rounded-lg">
        <div className="text-4xl">
          <span className="">
            <BiExitFullscreen />
          </span>
        </div>
        <div>
          <h2 className="text-white text-xl font-bold">100% Secured</h2>
          <p className="mt-3">
            We take proactive steps make sure your information and transactions
            are secure.
          </p>
        </div>
      </div>
      {/* icon 3 */}
      <div className="flex justify-center items-center gap-5 hover:bg-slate-700 p-4 rounded-lg">
        <div className="text-4xl">
          <span>
            <FaFastForward />
          </span>
        </div>
        <div>
          <h2 className="text-white text-xl font-bold">Rewards</h2>
          <p className="mt-3">
            The best credit cards offer some tantalizing combinations of
            promotions and prizes
          </p>
        </div>
      </div>
    </div>
  );
};
