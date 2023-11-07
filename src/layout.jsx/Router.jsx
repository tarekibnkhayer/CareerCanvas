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
          element:<Update></Update>,
          loader: ({params}) => fetch(`https://career-canvas-server.vercel.app/postedJobs/${params.id}`)
        }
      ]
    },
  ]);
  export default router;