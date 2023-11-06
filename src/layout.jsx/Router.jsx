import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import AddJob from "../pages/AddJob";
import PrivateRoutes from "../privateRouter/PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
  export default router;