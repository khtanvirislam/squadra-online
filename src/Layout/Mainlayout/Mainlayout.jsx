import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../Components/Header/NavBar/NavBar";

export const MainLayOut = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-950  text-white px-4 md:px-12">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
