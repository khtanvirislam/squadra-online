import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { AboutUs } from "../Pages/AboutUs/AboutUs";
import { Features } from "../Pages/Features/Features";
import { MainLayOut } from "../Layout/Mainlayout/Mainlayout";
import { Solution } from "../Pages/Solution/Solution";
import { Footer } from "../Components/Footer/Footer";

export const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/solution",
        element: <Solution></Solution>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
