import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../Components/Header/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";

export const MainLayOut = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-950  text-white px-4 md:px-12">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
