import React from "react";

export const Stats = () => {
  return (
    <section className="mb-10 md:mb-20 ">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center md:justify-normal ">
        <div className="mt-10 md:mt-0 flex items-center gap-2 ">
          <h4 className="text-3xl md:text-5xl font-medium">600+</h4>
          <p className="text-xl font-bold pt-2 text-teal-300 italic">
            Active User
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-3xl md:text-5xl font-medium">36+</h4>
          <p className="text-xl font-bold pt-2 text-teal-300 italic">
            Trusted Companies
          </p>
        </div>
      </div>
    </section>
  );
};
