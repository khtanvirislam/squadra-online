import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <nav className="flex gap-2 justify-between items-center py-6">
        <Logo></Logo>
        <ul className=" sm:flex hidden gap-5 lg:gap-10">
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
        {/* small device animation */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <h3
            className="w-[28px] h-[35px] bg-slate-900 px-1 py-2 rounded-full justify-center items-center font-extrabold text-xl"
            onClick={handleToggle}
          >
            {toggle ? <IoMdClose /> : <CiMenuFries />}
          </h3>
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-r from-slate-700 to-slate-800 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col ">
            <li className="mb-2 ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium border-b-2"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium border-b-2"
                    : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/features"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium border-b-2"
                    : ""
                }
              >
                Features
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/solution"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium border-b-2"
                    : ""
                }
              >
                Solution
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="" />
    </div>
  );
};
