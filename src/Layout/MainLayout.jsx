import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../Router/Components/Navbar/Navbar";

export const MainLayout = () => {
  return (
    <div className="bg-slate-900 w-full overflow-hidden text-white">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};
