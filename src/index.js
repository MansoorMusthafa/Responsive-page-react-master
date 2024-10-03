import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Project from "./routes/Project";
import PersonalInfo from "./routes/PersonalInfo";
import Skills from "./routes/Skills";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: "about",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Project />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
