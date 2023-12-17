import React from "react";
import { Link } from "react-router-dom";
import { Service } from "../Service/Service";

export const BusinessButton = () => {
  // const id = "1";
  return (
    <div className="flex justify-center mt-10 ">
      <Link to={`/service}`}>
        <button className="btn btn-accent font-bold text-xl text-slate-900 hover:bg-teal-900 hover:text-white">
          Get Started !
        </button>
      </Link>
    </div>
  );
};
