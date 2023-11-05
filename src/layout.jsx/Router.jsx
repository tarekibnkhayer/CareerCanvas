import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import AddJob from "../pages/AddJob";

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
          element: <AddJob></AddJob>
        }
      ]
    },
  ]);
  export default router;