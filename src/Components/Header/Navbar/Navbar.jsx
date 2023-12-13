import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-24 py-6">
        <Logo></Logo>
        <ul className="flex gap-10">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-medium border-b-2" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-medium border-b-2" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/features"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-medium border-b-2" : ""
              }
            >
              Features
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/solution"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-medium border-b-2" : ""
              }
            >
              Solution
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
