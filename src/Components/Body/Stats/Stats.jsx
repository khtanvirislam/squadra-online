import React from "react";

export const Stats = () => {
  return (
    <section
      className="my-20 flex
      justify-center"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center md:justify-normal ">
        <div className="mt-10 md:mt-0 flex items-center gap-1  ">
          <h4 className="text-3xl md:text-5xl font-medium">600+</h4>
          <p className="text-xl font-bold pt-2 text-teal-400 ">Active User</p>
        </div>
        <div className="flex items-center gap-1">
          <h4 className="text-3xl md:text-5xl font-medium">36+</h4>
          <p className="text-xl font-bold pt-2 text-teal-400 ">Companies</p>
        </div>
        <div className="flex items-center gap-1">
          <h4 className="text-3xl md:text-5xl font-medium">$0.3M+</h4>
          <p className="text-xl font-bold pt-2 text-teal-400 ">Transaction</p>
        </div>
      </div>
    </section>
  );
};
