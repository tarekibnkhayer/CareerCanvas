import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import AddJob from "../pages/AddJob";
import PrivateRoutes from "../privateRouter/PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import Update from "../forUpdatePage/Update";
import JobDetails from "../components/forHomePage/JobDetails";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }, 
        {
          path: '/addJob',
          element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/myPostedJobs',
          element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
        },
        {
          path: "update/:id",
          element:<Update></Update>
        },
        {
          path: "/jobDetails/:id",
          element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>
        },
        {
          path: "/myBids",
          element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
        },
        {
          path: '/bidRequests',
          element: <PrivateRoutes><BidRequests></BidRequests></PrivateRoutes>
        }
      ]
    },
  ]);
  export default router;