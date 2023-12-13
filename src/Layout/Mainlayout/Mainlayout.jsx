import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../Components/Header/NavBar/NavBar";

export const MainLayOut = () => {
  return (
    <div className="bg-slate-900 text-white">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
