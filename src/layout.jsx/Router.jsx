import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import AddJob from "../pages/AddJob";
import PrivateRoutes from "../privateRouter/PrivateRoutes";
import Login from "../pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
        }
      ]
    },
  ]);
  export default router;