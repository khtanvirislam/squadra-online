import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { AboutUs } from "../Pages/AboutUs/AboutUs";
import { Features } from "../Pages/Features/Features";
import { MainLayOut } from "../Layout/Mainlayout/Mainlayout";
import { Solution } from "../Pages/Solution/Solution";
import { Footer } from "../Components/Footer/Footer";
import { Service } from "../Components/Body/Service/Service";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";

export const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,

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
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
